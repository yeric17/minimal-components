export class StateMachine {

}

export class StateNode{
    
    private state:IState
    private transitions:Transition[]
    
    constructor(state:IState){
        this.state = state
        this.transitions = []
    }
    
    public AddTransition(transition:Transition){
        this.transitions.push(transition)
    }
    
}

export interface IState {
    Update(): void
    OnEnter(): void
    OnExit(): void
}

export class Transition {

    private from:IState
    private to:IState
    private condition:TransitionCondition

    constructor(from:IState, to:IState, condition:TransitionCondition){
        this.from = from
        this.to = to
        this.condition = condition
    }
}

export type TransitionCondition = ()=>boolean