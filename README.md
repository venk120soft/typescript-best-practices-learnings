# typescriptBestPracticesLearnings
Typescript Learning


I have added the concepts to Improve Wesite Performance using Debouncing and Throttling

## Throttling and Debouncing
Throttling is a technique in which, no matter how many times the user fires the event, 
the attached function will be executed only once in a given time interval.
setTimeOut can be used for this

In the debouncing technique, no matter how many times the user fires the event, 
the attached function will be executed only after the specified time once the user stops firing the event.
setTimeOut and clearTimeout(timerId) can be used to implement this.

[more info](https://github.com/venk120soft/typescriptBestPracticesLearnings/blob/master/Throttling%26Debouncing)

## DeepCopy and Shallow Copy:
When DeepCopy is done, when we make changes to the copy variable it won't reflect to the original variable.
Whereas ShallowCopy do reflect the changes to original

DeepCopy can be done using Object.assign({},array), spred operator(...), JSON.parse(JSON.stringify(arrayName))

[more info](https://github.com/venk120soft/typescriptBestPracticesLearnings/blob/master/DeepVsShallowCopy)
