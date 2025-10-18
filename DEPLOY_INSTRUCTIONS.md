# 🚀 Инструкция по деплою на Vercel

## Шаг 1: Инициализация Git (ВЫПОЛНЕНО ✅)

Репозиторий уже инициализирован и все файлы добавлены.

## Шаг 2: Создание репозитория на GitHub

### Вариант A: Через GitHub Desktop (проще)

1. **Скачайте GitHub Desktop:** https://desktop.github.com/
2. **Установите и войдите** в свой аккаунт
3. **File → Add Local Repository**
4. **Выберите папку:** `C:\Users\zaice\Desktop\alpha v2`
5. **Publish repository:**
   - Name: `alpha-star-properties-v2`
   - Description: `Premium real estate website for Alpha Star Properties in Dubai`
   - ☑️ Keep this code private (если хотите приватный)
6. **Нажмите "Publish repository"**

### Вариант B: Через командную строку

Выполните эти команды в PowerShell:

```powershell
# Перейдите в папку проекта
cd "C:\Users\zaice\Desktop\alpha v2"

# Создайте репозиторий на GitHub через браузер:
# 1. Откройте https://github.com/new
# 2. Repository name: alpha-star-properties-v2
# 3. Выберите Private/Public
# 4. НЕ добавляйте README, .gitignore, license
# 5. Нажмите "Create repository"

# Затем выполните команды которые GitHub покажет:
git remote add origin https://github.com/ВАШ_ЮЗЕРНЕЙМ/alpha-star-properties-v2.git
git branch -M main
git push -u origin main
```

## Шаг 3: Деплой на Vercel

### Вариант A: Через веб-интерфейс (рекомендуется)

1. **Откройте:** https://vercel.com/signup
2. **Войдите через GitHub**
3. **Нажмите "Add New..." → Project**
4. **Выберите репозиторий:** `alpha-star-properties-v2`
5. **Configure Project:**
   - Framework Preset: Next.js (определится автоматически)
   - Root Directory: ./
   - Build Command: `npm run build` (автоматически)
   - Output Directory: .next (автоматически)
6. **Environment Variables** (можно добавить позже):
   ```
   SITE_URL = https://ваш-домен.vercel.app
   NEXT_PUBLIC_SITE_URL = https://ваш-домен.vercel.app
   ```
7. **Нажмите "Deploy"**
8. **Ждите 2-3 минуты** ☕

### Вариант B: Через Vercel CLI

```powershell
# Установите Vercel CLI
npm i -g vercel

# Войдите в аккаунт
vercel login

# Деплой
vercel

# Следуйте инструкциям:
# ? Set up and deploy "alpha v2"? Yes
# ? Which scope? (выберите ваш аккаунт)
# ? Link to existing project? No
# ? What's your project's name? alpha-star-properties-v2
# ? In which directory is your code located? ./

# Production деплой
vercel --prod
```

## Шаг 4: Настройка после деплоя

### A. Обновите Environment Variables в Vercel

1. Откройте ваш проект на Vercel
2. **Settings → Environment Variables**
3. Добавьте:
   ```
   SITE_URL = https://alpha-star-properties-v2.vercel.app
   NEXT_PUBLIC_SITE_URL = https://alpha-star-properties-v2.vercel.app
   ```
4. Если нужен AmoCRM:
   ```
   AMOCRM_SUBDOMAIN = your-subdomain
   AMOCRM_CLIENT_ID = your-client-id
   AMOCRM_CLIENT_SECRET = your-client-secret
   AMOCRM_ACCESS_TOKEN = your-access-token
   AMOCRM_REFRESH_TOKEN = your-refresh-token
   ```

### B. Настройте домен (опционально)

1. **Settings → Domains**
2. **Add Domain**
3. Введите ваш домен: `alphastarproperties.ae`
4. Следуйте инструкциям по настройке DNS

### C. Проверьте деплой

1. Откройте `https://alpha-star-properties-v2.vercel.app/ru`
2. Проверьте все страницы
3. Протестируйте формы
4. Проверьте на мобильном

## Шаг 5: Автоматический деплой

Теперь при каждом push в GitHub, Vercel автоматически:
✅ Соберет проект
✅ Запустит тесты
✅ Задеплоит на production

## 🎯 Быстрая шпаргалка

### Обновление сайта:

```powershell
# 1. Внесите изменения в код
# 2. Коммит:
git add .
git commit -m "Описание изменений"
git push

# 3. Vercel автоматически задеплоит!
```

### Откат к предыдущей версии:

1. Откройте проект в Vercel
2. **Deployments**
3. Найдите нужную версию
4. **⋮ → Promote to Production**

## 📊 После деплоя

### Проверьте:
- [ ] Сайт открывается
- [ ] Обе языковые версии работают (RU/EN)
- [ ] Все страницы загружаются
- [ ] Заглушки изображений отображаются
- [ ] Формы работают (если настроен AmoCRM)
- [ ] Мобильная версия корректна

### Настройте:
- [ ] Google Analytics (если нужен)
- [ ] Yandex Metrica (если нужен)
- [ ] Meta Pixel (если нужен)
- [ ] Свой домен (если есть)

## 🆘 Проблемы?

### Ошибка при деплое:
- Проверьте логи в Vercel
- Убедитесь что `npm run build` работает локально

### Изображения не загружаются:
- SVG заглушки должны работать автоматически
- Проверьте пути в `data/properties.json`

### Формы не отправляются:
- Проверьте Environment Variables в Vercel
- Убедитесь что AmoCRM настроен

## 🎉 Готово!

Ваш сайт теперь:
✅ На GitHub
✅ Задеплоен на Vercel
✅ Доступен по URL
✅ Автоматически обновляется при push

**URL сайта:** https://alpha-star-properties-v2.vercel.app

**Админка Vercel:** https://vercel.com/dashboard

---

**Нужна помощь?** Пишите в поддержку Vercel или проверяйте документацию.

