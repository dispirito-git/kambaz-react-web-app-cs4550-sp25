import PassingFunctions from "./PassingFunctions";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjextStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ReduxExamples from "./ReduxExamples";
import TodoList from "../Lab3/todos/TodoList";

export default function Lab4() {
    function sayHello() {
    alert("Hello");
    }
    return (
        <div id="wd-passing-functions">
        <h2>Lab 4</h2>
        <ClickEvent />
        <PassingDataOnEvent />
        <PassingFunctions theFunction={sayHello} />
        <EventObject />
        <Counter />
        <BooleanStateVariables />
        <StringStateVariables />
        <DateStateVariable />
        <ObjectStateVariable />
        <ArrayStateVariable />
        <ReduxExamples />
        <TodoList />
        </div>
    );}