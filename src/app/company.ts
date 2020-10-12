export interface Company {
    id: string;
    company: string;
    isActive: boolean;
    currentPrice: number;
    price1MonthAgo: number;
    price6MonthsAgo: number;
    price1YearAgo: number;
    industryType: string;
    email: string;
    phone: string;
    address: string;
    about: string;
    registered: Date;
}
