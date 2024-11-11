import i18next from "i18next";
import { initLitI18n } from "lit-i18n";

export const LANGS = ["en", "tr"];
export const defaultLang = document.documentElement.lang;

export async function initializeLang(selected = defaultLang) {
  i18next.use(initLitI18n).init({
    lng: selected,
    supportedLngs: LANGS,
    resources: {
      en: {
        translation: {
          Employees: "Employees",
          "Add New": "Add New",
          "Employee List": "Employee List",
          "First Name": "First Name",
          "Last Name": "Last Name",
          "Date of Employment": "Date of Employment",
          "Date of Birth": "Date of Birth",
          Phone: "Phone",
          Email: "Email",
          Department: "Department",
          Position: "Position",
          Actions: "Actions",
          Edit: "Edit",
          Delete: "Delete",
        },
      },
      tr: {
        translation: {
          Junior: "Yeni Başlayan",
          Medior: "Orta Seviye",
          Senior: "Kıdemli",
          Tech: "Teknoloji",
          Analytics: "Analitik",
          "Your changes will be saved. Do you want to proceed?":
            "Değişiklikleriniz kaydedilecek. Devam etmek istiyor musunuz?",
          "Edit Record": "Kaydı Düzenle",
          Save: "Kaydet",
          Submit: "Ekle",
          Reject: "İptal",
          Accept: "Kabul Et",
          "Are you sure?": "Emin misin?",
          "Selected employee record of {{name}} will be deleted.":
            "Çalışan {{name}} için seçili personel kaydı silinecektir.",
          Employees: "Çalışanlar",
          "Add New": "Yeni Ekle",
          "Employee List": "Çalışan Listesi",
          "First Name": "Ad",
          "Last Name": "Soyad",
          "Date of Employment": "İşe Başlama Tarihi",
          "Date of Birth": "Doğum Tarihi",
          Phone: "Telefon",
          Email: "E-posta",
          Department: "Bölüm",
          Position: "Pozisyon",
          Actions: "İşlemler",
          Edit: "Düzenle",
          Delete: "Sil",
        },
      },
    },
  });
}
