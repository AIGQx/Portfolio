const navLang = navigator.language;
			// load the page in the user's language
			export async function loadLang() {
					try {
					const response = await fetch("/src/language/es.json");
					const dictionary = await response.json();
				} catch (error) {
					console.log(`error loading language: ${error}`);	
				}
			}
    