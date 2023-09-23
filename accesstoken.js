window.onload = () => {
	const supabaseUrl = urlsupa;
	const supabaseKey = keysupa;
	const supabaseff = supabase.createClient(supabaseUrl, supabaseKey);
	supabaseff.auth.getSession().then(async (session) => {
		let token;
		let userSession;

		//token
		if (session.data.session && session.data.session["access_token"]) {
			token = session.data.session["access_token"];
		} else {
			token = null;
		}

		if (session.user) userSession = session;
		else {
			userSession = localStorage.getItem("session");

			userSession = {
				data: {
					session: JSON.parse(userSession),
				},
			};
		}

		return chrome.storage.sync.set(
			{ session: JSON.stringify(userSession) },
			function () {
				// console.log("session has been set");
			}
		);
	});
};

