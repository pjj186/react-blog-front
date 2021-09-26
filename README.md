# 블로그 프론트엔드

## Pages

- 로그인
- 회원가입
- 글쓰기
- 포스트 읽기
- 포스트 목록

## Note

```
  <Route component={PostListPage} path={["/@:username", "/"]} exact />
```

- path에 배열을 넣어주면 한 라우트 컴포넌트에 여러 개의 경로를 쉽게 설정 가능
- path에 "/@:username" 처럼 입력하면 http://localhost:3000/@pjj 와 같은 경로에서 pjj를 username 파라미터로 읽을 수 있게 해줌
- 계정 명을 주소 경로 안에 넣을 때 주소 경로에 @을 넣는 방식을 사용한다.

## Source

- lib : 다양한 컴포넌트에서 공통적으로 쓰일만한 모듈들이 들어있는 디렉토리
- components : 프레젠테이셔널 컴포넌트, 그리고 부품처럼 사용할 컴포넌트들이 모여있는 디렉토리
- pages : Route path에 따라 보여줄 컴포넌트들이 모여있는 디렉토리
