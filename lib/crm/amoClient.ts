import axios from 'axios';

interface LeadData {
  name: string;
  phone: string;
  email: string;
  message?: string;
  source?: string;
  page_url?: string;
  utm_params?: Record<string, string>;
}

class AmoCRMClient {
  private baseUrl: string;
  private accessToken: string;

  constructor() {
    const subdomain = process.env.AMOCRM_SUBDOMAIN || '';
    this.baseUrl = `https://${subdomain}.amocrm.ru/api/v4`;
    this.accessToken = process.env.AMOCRM_ACCESS_TOKEN || '';
  }

  async createLead(data: LeadData) {
    try {
      // Create contact first
      const contactResponse = await axios.post(
        `${this.baseUrl}/contacts`,
        [
          {
            name: data.name,
            custom_fields_values: [
              {
                field_code: 'PHONE',
                values: [{ value: data.phone }],
              },
              {
                field_code: 'EMAIL',
                values: [{ value: data.email }],
              },
            ],
          },
        ],
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const contactId = contactResponse.data._embedded.contacts[0].id;

      // Create lead
      const leadResponse = await axios.post(
        `${this.baseUrl}/leads`,
        [
          {
            name: `Заявка с сайта: ${data.name}`,
            price: 0,
            custom_fields_values: [
              {
                field_code: 'UTM_SOURCE',
                values: [{ value: data.source || 'Alpha Star Website' }],
              },
              {
                field_code: 'PAGE_URL',
                values: [{ value: data.page_url || '' }],
              },
            ],
            _embedded: {
              contacts: [{ id: contactId }],
            },
          },
        ],
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // Add note with message
      if (data.message) {
        const leadId = leadResponse.data._embedded.leads[0].id;
        await axios.post(
          `${this.baseUrl}/leads/${leadId}/notes`,
          [
            {
              note_type: 'common',
              params: {
                text: data.message,
              },
            },
          ],
          {
            headers: {
              Authorization: `Bearer ${this.accessToken}`,
              'Content-Type': 'application/json',
            },
          }
        );
      }

      return { success: true, data: leadResponse.data };
    } catch (error) {
      console.error('AmoCRM Error:', error);
      throw error;
    }
  }

  async refreshToken() {
    try {
      const response = await axios.post(
        `https://${process.env.AMOCRM_SUBDOMAIN}.amocrm.ru/oauth2/access_token`,
        {
          client_id: process.env.AMOCRM_CLIENT_ID,
          client_secret: process.env.AMOCRM_CLIENT_SECRET,
          grant_type: 'refresh_token',
          refresh_token: process.env.AMOCRM_REFRESH_TOKEN,
          redirect_uri: process.env.AMOCRM_REDIRECT_URI,
        }
      );

      return response.data;
    } catch (error) {
      console.error('Token refresh error:', error);
      throw error;
    }
  }
}

export const amoCRM = new AmoCRMClient();

