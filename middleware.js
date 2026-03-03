import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const authRegexChecker = new RegExp('auth/*');
  if(authRegexChecker.test(request.url)){
    console.log("Middleware invoked at time:" + new Date());
    console.log({url: request.url});
    console.log({pathname: request.nextUrl.pathname});
    console.log({method: request.method});
  }
}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }
// Middleware này chỉ đứng canh ở các con đường bắt đầu bằng /about
// Nếu ai đó đi vào /about , hàm này sẽ tóm lại và điều hướng sang trang home  const authRegexChecker = new RegExp('auth/*');

  // const authRegexChecker = new RegExp('auth/*'); theo dõi những yêu cầu liên quan đến xác thực VD: /auth/login, /auth/register, /api/auth
  // if(authRegexChecker.test(request.url)){ // điều kiện trả về true nếu URL của trình duyệt gửi lên có chữ auth/
  //   console.log("Middleware invoked at time:" + new Date()); // nếu điều kiện có /auth/login , trả ra true , các lệnh console.log sẽ chạy
  //   console.log({url: request.url});
  //   console.log({pathname: request.nextUrl.pathname});
  //   console.log({method: request.method});
  // }