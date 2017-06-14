import { ui, Button, TextView, ScrollView, Composite } from 'tabris';

export class Something extends Composite {

    public get message(): string {
        return this.tv.text;
    }
    public set message(v: string) {
        this.tv.text = v;
    }

    private tv: TextView;
    constructor() {
        super({ left: 0, right: 0, top: 0, height: 100, background: '#ff0000' });
        this.tv = new TextView({ left: 0, alignment: 'center', top: 0, bottom: 0, right: 0, text: 'something' });
        this.append(this.tv);
    }

}