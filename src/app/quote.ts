export class Quote {
    showQuoted: boolean;
    showAuthor: boolean;
    constructor (
        public names:string,
        public quoted:string,
        public author:string,
        public uploadedDate: Date) {
            
        this.showQuoted=false;
        this.showAuthor=false;
    }
}
