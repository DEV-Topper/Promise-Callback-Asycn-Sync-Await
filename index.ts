// import moment from "moment";

// console.log("bring cup 1");
// console.log("bring cup 2");
// console.log("bring cup 3");
// cup(12000);
// console.log("bring cup 4");
// console.log("bring cup 5");

// function cup(guessTime: number) {
// 	console.log("This function brings cup!");

// 	let time = new Date().getTime();
// 	let delatTime = time + guessTime;

// 	setTimeout(() => {
// 		while (new Date().getTime() < delatTime) {
// 			// console.log('Start prosessing !!');
// 		}
// 		console.log();

// 		console.log(
// 			"Start process executed at: ",
// 			moment(time).format("LTS")
// 		);

// 		console.log(
// 			"End process executed at: ",
// 			moment(delatTime).format("LTS")
// 		);
// 		console.log(
// 			"This whole process took",
// 			(delatTime - time) / 1000,
// 			"seconds"
// 		);

// 		console.log();
// 	}, 0);
// }

// const check = (cb: any): void => {
// 	setTimeout(() => {
// 		return cb("hey");
// 	});
// };

// console.log(
// 	check((res: any) => {
// 		console.log(res);
// 	})
// );

// let Myname: string = "TOPPER";

// let theName = (data: any): void => {
// 	console.log(data);
// };

// theName(54);

// const promise = new Promise((resolve, reject) => {
// 	if (true) {
// 		resolve("A promise kept");
// 	} else {
// 		reject("A promise failed");
// 	}
// });

// promise
// 	.then((res) => {
// 		console.log(`${res} with `);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	})
// 	.finally(() => {
// 		console.log("lock Up");
// 	});

// let Something: string = "Olu";

// let tobi = "yes";

// let thePromise = new Promise((resolve, reject) => {
// 	if (tobi === "yes") {
// 		resolve("A promise kept");
// 	} else {
// 		reject("no");
// 	}
// });

// promise
// 	.then((the) => {
// 		console.log(`${tobi}`);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	})
// 	.finally(() => {
// 		console.log("good");
// 	});

import PromptSync from "prompt-sync";
const prompt = PromptSync();

// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		let randomNumber: number = Math.floor(Math.random() * 10);

// 		const guessNumb = parseInt(prompt("What your Number: "));
// 		if (randomNumber === guessNumb) {
// 			resolve("Correct!");
// 		} else {
// 			reject("Incorrect!");
// 		}
// 	}, 1000);
// });

let userEmail: string;
let UserPasword: string;

const MakeRequest = () => {
	const email = prompt("Enter your email address:");
	const password = prompt("Enter your password:");

	userEmail = email;
	UserPasword = password;
	return new Promise((resolve, reject) => {
		return setTimeout(() => {
			if (
				userEmail === "ekene@test.com" &&
				UserPasword === "ekene@test.com"
			) {
				// resolve(`User Authentication Successfull`)
				resolve(`${userEmail.split("@")[0]}`);
			} else {
				reject("User Authentication Failed");
			}
		}, 1000);
	});
};

const LandingPage = (res: any) => {
	console.log(`Welcome  ${res} to the LandingPage`);
};

// MakeRequest()
// 	.then((res: any) => {
// 		LandingPage(res);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

const myWebApp = async () => {
	const Val = await MakeRequest();
	const result = LandingPage(Val);
	console.log(result);
};

myWebApp();
