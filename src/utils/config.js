import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      greeting: "Hello!",
      header: "Architecture",
      addPost: "Add Post",
      lang: "ENG",
      langH: "Language",
      search: "Search Anything",
      wiki: "Wiki",
      comp: "Competitions",
      events: "Events",
      login: "Login",
      dash: "Go To Dashboard",
      msgs: "Messages",
      profile: "Profile",
      logout: "Log Out",
      postSection: "Posts Section",
      postsection: "Posts Section",
      projectsection: "Project Section",
      addPic: "Add Picture",
      title: "Add your Title",
      desc: "Add your Description",
      createPin: "Create Pin",
      work: "Work",
      tos: "Terms of use",
      pp: "Privacy Policy",
      cp: "Cookie Policy",
      rss: "RSS",
      contactus: "Contact Us",
      arr: "All rights reserved. Architecture 2020-2023",
      aia: "All images are © each office/photographer mentioned",
      bs: "Block Section",
    },
  },
  ar: {
    translation: {
      greeting: "مرحبًا!",
      header: "بنيان",
      addPost: "أضف منشورا",
      lang: "العربی",
      langH: "لغة",
      search: "البحث في أي شيء",
      wiki: "ويكي",
      comp: "مسابقات",
      events: "الأحداث",
      login: "تسجيل الدخول",
      dash: "اذهب إلى لوحة القيادة",
      msgs: "رسائل",
      profile: "حساب تعريفي",
      logout: "تسجيل خروج",
      postSection: "قسم المشاركات",
      projectsection: "قسم المشاريع",
      addPic: "إضافة الصورة",
      title: "أضف عنوانك",
      desc: "أضف الوصف الخاص بك",
      createPin: "إنشاء دبوس",
      work: "عمل",
      tos: "شروط الاستخدام",
      pp: "سياسة الخصوصية",
      cp: "سياسة ملفات الارتباط",
      rss: "آر إس إس",
      contactus: "اتصل بنا",
      arr: "كل الحقوق محفوظة. الهندسة المعمارية 2020-2023",
      aia: "جميع الصور محفوظة © لكل مكتب/مصور مذكور",
      bs: "قسم الكتلة",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
