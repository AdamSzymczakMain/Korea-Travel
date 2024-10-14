import {
  Search,
  Calendar,
  CircleEllipsis,
  CalendarCheck2,
  PartyPopper,
} from "lucide-react";

export const navItems = [
  { label: "Informacje", href: "#" },
  { label: "Wycieczki", href: "#" },
  { label: "Zdjęcia", href: "#" },
  { label: "O mnie", href: "#" },
];

export const stepItems = [
  {
    icon: <Search />,
    header: "Wyszukaj interesującą cię podróży",
    content: "Znajdź idelna podróż dla siebie sprawdzając moje propozycje",
  },
  {
    icon: <Calendar />,
    header: "Sprawdź dostępny termin",
    content: "Wybierz dogodny termin dostępny dla Ciebie i zarezerwuj",
  },
  {
    icon: <CircleEllipsis />,
    header: "Wybierz dodatkowe opcje",
    content:
      "Dostosuj swoją podróż dodając opcje, które spełnią Twoje oczekiwania",
  },
  {
    icon: <CalendarCheck2 />,
    header: "Dokonaj rezerwacji",
    content: "Znajdź idelna podróż dla siebie sprawdzając moje propozycje",
  },
  {
    icon: <PartyPopper />,
    header: "Potwierdź i ciesz się swoją rezerwacją",
    content:
      "Otrzymaj potwierdzenie rezerwacji i przygotuj się na niezapomnianą przygodę!",
  },
];
