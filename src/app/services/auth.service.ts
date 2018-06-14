import { Injectable } from '@angular/core';
import { AUTH_CONFIG } from './auth0-variables';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import Auth0Lock from 'auth0-lock';


@Injectable()
export class AuthService {

    lock = new Auth0Lock(AUTH_CONFIG.clientID, AUTH_CONFIG.domain, {
        autoclose: true,    allowAutocomplete: true, allowShowPassword: true,
        theme: {
            logo: 'https://www.logoground.com/uploads/201687052016-10-03397169790.jpg'
        },
        // allowedConnections: ['facebook','Username-Password-Authentication'],
        auth: {
            redirectUrl: AUTH_CONFIG.callbackURL,
            responseType: 'token id_token',
            audience: `https://${AUTH_CONFIG.domain}/userinfo`,
            params: {
                scope: 'openid profile email user_metadata app_metadata'
            }
        },
        socialButtonStyle: 'large',
        // additionalSignUpFields: [{
        // //     name: "address",
        // //     placeholder: "enter your address",
        // //     // The following properties are optional
        // //     icon: "https://example.com/assests/address_icon.png",
        // //     prefill: "street 123",
        // //     validator: function(address) {
        // //         return {
        // //             valid: address.length >= 10,
        // //             hint: "Must have 10 or more chars" // optional
        // //         };
        // //     }
        // // },
        // //     {
        //         name: "full_name",
        //         placeholder: "Enter your full name"
        //     }],
        // usernameStyle: 'username'
    });

    constructor(public router: Router) {}

    public login(): void {
        this.lock.show();
    }

    // Call this method in app.component.ts
    // if using path-based routing
    public handleAuthentication(): void {

        this.lock.on('authenticated', (authResult) => {
            this.lock.getUserInfo(authResult.accessToken, function(error, profile) {
                if (error) {
                    // Handle error
                    return;
                }

                //profile.user_metadata = profile.user_metadata || {};
                console.log(profile);
                localStorage.setItem('profile', JSON.stringify(profile));
                // this.user = profile;
                //console.log(profile);
            //
            //     document.getElementById('nick').textContent = profile.nickname;
            //
            //     localStorage.setItem('accessToken', authResult.accessToken);
            //     localStorage.setItem('profile', JSON.stringify(profile.full_name));
            //     console.log(profile.full_name);
            });

            // console.log(user.user_metadata.hobby);
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);

                this.router.navigate(['/']);
            }
        });
        this.lock.on('authorization_error', (err) => {
            this.router.navigate(['/']);
            console.log(err);
            alert(`Error: ${err.error}. Check the console for further details.`);
        });
    }

    // Call this method in app.component.ts
    // if using hash-based routing
    public handleAuthenticationWithHash(): void {
        this
            .router
            .events
            .pipe(
                filter(event => event instanceof NavigationStart),
                filter((event: NavigationStart) => (/access_token|id_token|error/).test(event.url))
            )
            .subscribe(() => {
                this.lock.resumeAuth(window.location.hash, (err, authResult) => {
                    if (err) {
                        this.router.navigate(['/']);
                        console.log(err);
                        alert(`Error: ${err.error}. Check the console for further details.`);
                        return;
                    }
                    this.setSession(authResult);
                    this.router.navigate(['/']);
                });
            });
    }

    private setSession(authResult): void {
        // Set the time that the access token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        // localStorage.setItem('id',authResult.id);
        console.log(authResult.idToken);
    }

    public logout(): void {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    }

    public isAuthenticated(): boolean {
        // Check whether the current time is past the
        // access token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

}