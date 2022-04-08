// import { Injectable } from '@angular/core';
// import { catchError } from 'rxjs/operators';
// import { Observable, throwError } from 'rxjs';
// import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
// import { AuthService } from 'src/app/service/auth.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class TokenInterceptorService implements HttpInterceptor {
//   constructor(private authService: AuthService) {}
//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     const { token } = this.authService.userValue;
//     if (token) {
//       request = request.clone({
//         setHeaders: {
//           Authorization: 'toke ${token}',
//         },
//       });
//     }
//     return next.handle(request).pipe(
//       catchError((err) => {
//         if (err.status === 401) {
//           this.authService.logout();
//         }
//         const error = err.error.message || err.statusText;
//         return throwError(error);
//       })
//     );
//   }
// }