export interface ISubscriber {
    update(article: string): void;
    getName(): string;
}
