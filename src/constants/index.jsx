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
    step: "Krok",
    number: "1",
    icon: <Search />,
    header: "Wyszukaj interesującą cię podróży",
    content: "Znajdź idelna podróż dla siebie sprawdzając moje propozycje",
  },
  {
    step: "Krok",
    number: "2",
    icon: <Calendar />,
    header: "Sprawdź dostępny termin",
    content: "Wybierz dogodny termin dostępny dla Ciebie i zarezerwuj",
  },
  {
    step: "Krok",
    number: "3",
    icon: <CircleEllipsis />,
    header: "Wybierz dodatkowe opcje",
    content:
      "Dostosuj swoją podróż dodając opcje, które spełnią Twoje oczekiwania",
  },
  {
    step: "Krok",
    number: "4",
    icon: <CalendarCheck2 />,
    header: "Dokonaj rezerwacji",
    content: "Znajdź idelna podróż dla siebie sprawdzając moje propozycje",
  },
  {
    step: "Krok",
    number: "5",
    icon: <PartyPopper />,
    header: "Potwierdź i ciesz się swoją rezerwacją",
    content:
      "Otrzymaj potwierdzenie rezerwacji i przygotuj się na niezapomnianą przygodę!",
  },
];
