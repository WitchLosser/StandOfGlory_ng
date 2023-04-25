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

export interface ICreateHero {
    name: string;
    image: File;
    battalionId: number;
    cityId: number;
    story: string;
    birthDate: Date;
    dateOfDeath: Date;
    cardNumber: string;
}

export interface ICity {
    id: number;
    name: string;
}

export interface IBattalion {
    id: number;
    name: string;
}