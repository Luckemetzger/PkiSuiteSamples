/**
 * This module contains the default application settings.
 */
module.exports = {

	// ==========================================================================
	// Application Settings
	// ==========================================================================
	debug: true,
	protocol: 'http',
	sessionSecret: 'keyboard cat',

	// Server HTTP port.
	port: process.env.PORT || '3000',

	// Application Environment.
	environment: 'default',

	// Trust in Lacuna Test PKI (for development purposes only!)
	trustLacunaTestRoot: true,
	// THIS SHOULD NEVER BE USED ON A PRODUCTION ENVIRONMENT!

	// --------------------------------------------------------------------------
	// REST PKI
	// --------------------------------------------------------------------------
	restPki: {
		// ========================================================
		//     >>>> PASTE YOUR REST PKI ACCESS TOKEN BELOW <<<<
		// ========================================================
		accessToken: 'wD_6l5tXwSnzyPN9pDwJY9l3WxOeNjuLfiS1zFpVwoXEWY8t1UqXRiEHl2JuziZLvDxUxlObqQqT-c4pgH8vWqb1YuK8TCOD_yW1_PgmF-dtweUOrVwsLNRMzfSou5ap97uGNml0QYPMlhXRInVwUW5D6Bq49oqRnXh6hor9X2xu6sjFFP9xE5qKh_cXghDjNR-D7jpjbzjBx1ui6jYBppyXE-JqO8wWC-xgUJOr1S0Z9Dsljg8bgsP8iwhVxJ5W26LAVa8GzNOMZGinzJ1OqrBN0-TLemqfX0u5x48a4K0OtS3ybjjLx0ubKMJ6cCyqFaHiikTnPcFEgOXTD2jG_rtrDYuaZ2jDAX3w1m5k12wnVcsAxerS70xfPlnoaQkCjE0DRb6Zc0ySFc7TEpfE6FB6DKS3GZ8LF8tUx7a_2T1KKi58FwfbaeYThx8GRdJZHhEgO-1p_ctyySUCFErIIHATtA5j7uBoXDDPuy8P9TfQoCtO8yvaw00nzMOyKtodu4Og3Q',
		// This is a TRIAL token. It will be expired at 15/01/2019.
		// If the REST PKI sample doesn't work, please contact our support by email: suporte@lacunasoftware.com

		// In order to use this sample on a "on premises" installation of
		// REST PKI, fill the field below with the URL address of your REST PKI
		// installation (with the trailing '/' character).
		endpoint: 'https://pki.rest/'
	},

	// --------------------------------------------------------------------------
	// PKI Express
	// --------------------------------------------------------------------------
	pkiExpress: {
		// List of custom trusted roots. In this sample, we will get the
		// certificate files on resources/ static folder.
		trustedRoots: [],

		// Offline mode. Set this, if you want PKI Express to run on offline mode.
		// This mode is useful when there is no network available.
		offline: false
	},

	// --------------------------------------------------------------------------
	// Web PKI
	// --------------------------------------------------------------------------
	webPki: {
		// Base64-encoded binary license for the Web PKI. This value is passed to
		// Web PKI component's constructor on JavaScript.
		license: null
	}
};