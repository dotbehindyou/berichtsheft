export type Report = {
    id: number,
    start: string,
    end: string,
    year: number,
    department: string,
    weekReports: WeekReport[]
};

export type WeekReport = {
    id: number,
    week: number,
    content: string
};