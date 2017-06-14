import { ui, Button, TextView, ScrollView, Composite } from 'tabris';
import * as virtualDom from './virtual-dom/index';




var h = virtualDom.h;
var diff = virtualDom.diff;
var patch = virtualDom.patch;
var createElement = virtualDom.create;


// 1: Create a function that declares what the DOM should look like
function render(theMessage, foo) {
    return (
        <Composite left="0" right="0" top="0" bottom="0">
            <Button on-select={() => ui.contentView.find('#bar').set('text', 'Tabris.js rocks!')} centerX="0" top="100" text={theMessage}></Button>
            <ScrollView top="prev()" bottom="0" left="0" right="0">
                <TextView centerX="0" top="prev() 50" font="24px" text={foo}></TextView>
                <TextView centerX="0" top="prev() 50" font="24px" text={foo}></TextView>
                <TextView centerX="0" top="prev() 50" font="24px" text={foo}></TextView>
                <TextView centerX="0" top="prev() 50" font="24px" text={foo}></TextView>
                <TextView centerX="0" top="prev() 50" font="24px" text={foo}></TextView>
                <TextView centerX="0" top="prev() 50" font="24px" text={foo}></TextView>
                <TextView centerX="0" top="prev() 50" font="24px" text={foo}></TextView>
                <TextView centerX="0" top="prev() 50" font="24px" text={foo}></TextView>
                <TextView centerX="0" top="prev() 50" font="24px" text={foo}></TextView>
                <TextView centerX="0" top="prev() 50" font="24px" text={foo}></TextView>
                <TextView centerX="0" top="prev() 50" font="24px" text={foo}></TextView>
                <TextView centerX="0" top="prev() 50" font="24px" text={foo}></TextView>
                <TextView centerX="0" top="prev() 50" font="24px" text={foo}></TextView>
            </ScrollView>
        </Composite>
    );
}

// 2: Initialise the document
var count = 0;      // We need some app data. Here we just store a count.

var tree = render("The message", 12);               // We need an initial tree
var rootNode = createElement(tree);     // Create an initial root DOM node ...
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
