const { welcome, goodbye, tell } = require("../utils/fortune-teller");

// const question = "Will the weather be nice today?";
// const promise = tell(question);
// promise
//   .then((fortune) => {
//     console.log(question);
//     console.log(fortune);
//   })
//   .catch(console.log);

// // above code is valid and complete one
// const tellPromise = tell()
//   .then((result) => {
//     console.log("Success:", result);
//   })
//   .catch((error) => {
//     console.log("Failure:", error);
//   });

// setTimeout(() => console.log(tellPromise), 500);

// // Chaning example
// welcome()
//   .then(console.log) // Logs the result of welcome()
//   .then(() => goodbye().then(console.log)) // .then inside of another .then
//   .catch(console.error); // Logs error from welcome() or goodbye()


// // The code below achieves the same logic and is easier to write and navigate.
// welcome()
//   .then(console.log) // Logs the result of welcome() ("Provide me a question and I'll give you an answer...")
//   .then(goodbye) // Returns promise from goodbye()
//   .then(console.log) // Logs the result of goodbye() ("Best of luck in the future...")
//   .catch(console.error); // Logs error from welcome() or goodby

// // nest then() calls to have access to the results of two or more promises.
// welcome()
//   .then((welcomeMessage) =>
//     goodbye().then((goodbyeMessage) => `${welcomeMessage}\n${goodbyeMessage}`)
//   ) // welcomeMessage and goodbyeMessage combined.
//   .then(console.log) // Logs combines messages
//   .catch(console.error); // Logs error from welcome() or goodbye()

// // order of then and catch : A then() or catch() always moves to the next then(). Therefore, if you place a then() call after a catch(), the next then() is always called. For example, run the following code to see the output:
// welcome()
//   .then(console.log) // Logs the result of welcome()
//   .then(tell) // Calls tell, which returns a rejected promise (no question supplied).
//   .then(console.log) // Skipped because tell returned a rejected promise.
//   .catch(console.error) // Logs error from tell() or welcome()
//   .then(goodbye) // Returns promise from goodbye()
//   .then(console.log) // Logs the result from goodbye()
//   .catch(console.error); // Logs error only from goodbye()

// // example (nothing will happen as question is given as string)
// const promise1 = tell(question);
// promise1.catch(() => {
//   console.log("Something went wrong...");
// });


// example 2
const question2 = "What will the weather be like today?";
const promise2 = tell(question2).then(() => {
  console.log(question2);
});

promise2.then(() => {
  console.log("Fortune telling complete.");
});

promise2.then(() => {
  console.log("Always, promise status is not consumed once it is fulfilled.");
});