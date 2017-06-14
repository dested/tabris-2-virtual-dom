import { ui, Button, TextView, ScrollView, Composite } from 'tabris';
import { Something } from './Something';
import * as virtualDom from './virtual-dom/index';


var h = virtualDom.h;


function render(theMessage, foo) {
    return (
        <Composite left="0" right="0" top="0" bottom="0">
            <Something message={`cool ${foo}`}></Something>
            <Button on-select={() => ui.contentView.find('#bar').set('text', 'Tabris.js rocks!')} centerX="0" top="100" text={theMessage}></Button>
            <ScrollView top="prev()" bottom="0" left="0" right="0">
                <TextView id="bar" centerX="0" top="prev() 50" font="24px" text="Not sure..."></TextView>
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

var tree = render("Does Tabris.JS Rock?", 12);
var rootNode = virtualDom.create(tree);
rootNode.appendTo(ui.contentView);


setInterval(() => {
    count++;

    var newTree = render(`Does Tabris.JS Rock ${count} Times?`, count);
    var patches = virtualDom.diff(tree, newTree);
    rootNode = virtualDom.patch(rootNode, patches);
    tree = newTree;


}, 1);

