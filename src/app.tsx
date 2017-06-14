import { ui, Button, TextView, ScrollView, Composite } from 'tabris';
import * as virtualDom from './virtual-dom/index';


export class Something extends Composite {

    constructor() {
        super({ left: 0, right: 0, top: 0, height: 100, background: '#ff0000' });
        this.append(new TextView({ left: 0, right: 0, text: 'something' }));
    }

}


var h = virtualDom.h;
var diff = virtualDom.diff;
var patch = virtualDom.patch;
var createElement = virtualDom.create;


function render(theMessage, foo) {
    return (
        <Composite left="0" right="0" top="0" bottom="0">
            <Something></Something>
            <Button on-select={() => ui.contentView.find('#bar').set('text', 'Tabris.js rocks!')} centerX="0" top="100" text={theMessage}></Button>
            <ScrollView top="prev()" bottom="0" left="0" right="0">
                <TextView id="bar" centerX="0" top="prev() 50" font="24px" text="yah"></TextView>
                <TextView centerX="0" top="prev() 50" font="24px" text={foo}></TextView>
                <TextView centerX="0" top="prev() 50" font="24px" text={foo + 1}></TextView>
                <TextView centerX="0" top="prev() 50" font="24px" text={foo + 2}></TextView>
                <TextView centerX="0" top="prev() 50" font="24px" text={foo + 3}></TextView>
                <TextView centerX="0" top="prev() 50" font="24px" text={foo + 4}></TextView>
                <TextView centerX="0" top="prev() 50" font="24px" text={foo + 5}></TextView>
                <TextView centerX="0" top="prev() 50" font="24px" text={foo + 6}></TextView>
                <TextView centerX="0" top="prev() 50" font="24px" text={foo + 7}></TextView>
                <TextView centerX="0" top="prev() 50" font="24px" text={foo + 8}></TextView>
                <TextView centerX="0" top="prev() 50" font="24px" text={foo + 9}></TextView>
                <TextView centerX="0" top="prev() 50" font="24px" text={foo + 10}></TextView>
                <TextView centerX="0" top="prev() 50" font="24px" text={foo + 11}></TextView>
                <TextView centerX="0" top="prev() 50" font="24px" text={foo + 12}></TextView>
            </ScrollView>
        </Composite>
    );
}



var count = 0;

var tree = render("The message", 12);
var rootNode = createElement(tree);
rootNode.appendTo(ui.contentView);


setInterval(() => {
    count++;

    var newTree = render("The MEssage" + count, count);
    var patches = diff(tree, newTree);
    rootNode = patch(rootNode, patches);
    tree = newTree;


}, 1);



/*let m = (
  <Composite left="0" right="0" top="0" bottom="0">
    <Button on-select={() => ui.contentView.find('#bar').set('text', 'Tabris.js rocks!')} centerX="0" top="100" text="Show Message"></Button>
    <TextView id="bar" centerX="0" top="prev() 50" font="24px"></TextView>
  </Composite>
).appendTo(ui.contentView);*/
