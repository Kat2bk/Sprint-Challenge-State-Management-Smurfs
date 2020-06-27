1. What problem does the context API help solve?
Prop drilling

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions is an object that is used by action creators which is passed to the reducer, the reducer takes in the current state and action and returns a new state. The store holds all the state, which is why it's called single source.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
application state is global, component state is local, meaning it is related to only that component

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
it allows action creators to return a function instead of an action
the thunk can delay the dispatch of an action, or dispatch only if certain things are met

1. What is your favorite state management system you've learned and this sprint? Please explain why!
redux - although confusing at first, I am starting to see how it can really simplify things on a global scale
