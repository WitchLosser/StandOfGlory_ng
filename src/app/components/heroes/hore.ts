export interface IHero {
    id: number;
    name: string;
    imagePath: string;
    battalion: IBattalion;
    city: ICity;
    story: string;
    birthDay: Date;
    dateOfDeath: Date;
    cardNumber: number;
}

export interface ICity {
    id: number;
    name: string;
}

export interface IBattalion {
    id: number;
    name: string;
}