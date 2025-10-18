import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export async function exportPropertyToPDF(propertyId: string, locale: string) {
  const element = document.getElementById(`property-${propertyId}`);
  if (!element) return;

  const canvas = await html2canvas(element, {
    scale: 2,
    logging: false,
    useCORS: true,
  });

  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const imgWidth = 210;
  const pageHeight = 297;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  while (heightLeft >= 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  pdf.save(`property-${propertyId}.pdf`);
}

export async function exportAnalyticsToPDF() {
  const element = document.getElementById('analytics-dashboard');
  if (!element) return;

  const canvas = await html2canvas(element, {
    scale: 2,
    logging: false,
    useCORS: true,
  });

  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4',
  });

  const imgWidth = 297;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
  pdf.save('market-analytics.pdf');
}

export function exportArticleToPDF(article: any) {
  const pdf = new jsPDF();
  
  // Add title
  pdf.setFontSize(20);
  pdf.text(article.title, 20, 20);
  
  // Add author and date
  pdf.setFontSize(12);
  pdf.text(`${article.author} | ${new Date(article.publishedAt).toLocaleDateString()}`, 20, 30);
  
  // Add content
  pdf.setFontSize(11);
  const splitText = pdf.splitTextToSize(article.content, 170);
  pdf.text(splitText, 20, 45);
  
  pdf.save(`${article.slug}.pdf`);
}

