export class Recipie {e
    public name:string;
    public description:string;
    public imagePath:string;

    constructor(name:string, desc:string, imagePath:string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}
/* export class Recipie {e
    constructor(public name:string = name, public desc:string = description, public imagePath:string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
} */