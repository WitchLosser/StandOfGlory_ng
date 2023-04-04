export interface IHeroCard {
    id: number;
    name: string;
    imagePath: string;
    battalionId: number;
}

export interface IHeroDetails extends IHeroCard {
    story: string;
    cityId: number;
    birthDay: Date;
    dateOfDeath: Date;
    cardNumber: number;
}