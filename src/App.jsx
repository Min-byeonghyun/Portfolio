import React, { useState, useEffect } from "react";
import {
  Github,
  Mail,
  ExternalLink,
  Code,
  Smartphone,
  Zap,
  Users,
  BookOpen,
  PlayCircle,
  Monitor,
  X,
  FileText,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Package,
  Calendar,
  Layers,
} from "lucide-react";

// 이미지 슬라이더 컴포넌트
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (e) => {
    e.stopPropagation();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!images || images.length === 0)
    return (
      <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
        No Image
      </div>
    );

  return (
    <div className="relative w-full h-full group overflow-hidden bg-slate-100">
      <div
        className="w-full h-full flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Slide ${idx}`}
            className="w-full h-full object-cover shrink-0"
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="
    absolute top-1/2 -translate-y-1/2 left-4 z-10
    p-3 rounded-full
    bg-black/50 text-white
    shadow-lg
    opacity-0 group-hover:opacity-100
    transition-all duration-200
    hover:bg-black/70 hover:scale-110
  "
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-4 z-10  p-3 rounded-full
    bg-black/50 text-white
    shadow-lg
    opacity-0 group-hover:opacity-100
    transition-all duration-200
    hover:bg-black/70 hover:scale-110"
          >
            <ChevronRight size={22} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  currentIndex === idx ? "bg-white w-3" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const profile = {
    name: "민병현",
    role: "Front-end Developer",
    email: "qudgus5125@naver.com",
    phone: "010-4230-5125",
    github: "https://github.com/Min-byeonghyun",
    blog: "https://velog.io/@min9999/posts",
    intro:
      "문제를 정의하고, 가장 합리적인 기술적 해법으로 비즈니스에 기여하는 프론트엔드 개발자입니다",
    description:
      "저는 사용자 경험과 시스템 안정성 사이의 균형을 고민하며 성장해온 프론트엔드 개발자입니다. 단순 기능 구현에 그치지 않고, 실제 서비스 환경에서 발생하는 동시성 이슈, 성능 병목, 인증 보안 문제를 직접 정의하고 해결하는데 집중해 왔습니다.",
  };

  const skills = {
    frontend: ["Javascript", "React", "Typescript", "Next.js"],
    state: ["Zustand", "TanstackQuery", "Context API"],
    styling: ["Styled-components", "Tailwind CSS", "CSS Modules"],
    tools: ["Notion", "Slack", "GitHub", "Figma", "Cursor", "VSC"],
  };

  const projects = [
    {
      id: "fantion",
      title: "Fan-tion (경매 커뮤니티 플랫폼)",
      period: "24.06 ~ 24.09",
      type: "Team Project (FE 3, BE 3)",
      tags: ["React", "Typescript", "SSE", "Styled-components", "MSW", "Axios"],
      description:
        "실시간 경매 기능과 커뮤니티를 결합한 웹 플랫폼을 개발하여 사용자 간 즉각적인 거래 경험 제공",
      images: [
        "/public/fantion/A.png",
        "/public/fantion/B.png",
        "/public/fantion/C.png",
        "/public/fantion/D.png",
        "/public/fantion/E.png",
        "/public/fantion/F.png",
        "/public/fantion/G.png",
        "/public/fantion/H.png",
        "/public/fantion/I.png",
      ],
      link: "https://drive.google.com/file/d/1p4Ua6Fd0dM8IKYU4VTt74JxQjudTmq05/view",
      github: "https://github.com/Min-byeonghyun/Fan-Tion",
      features: [
        {
          title: "Race Condition 해결",
          content:
            "useRef를 통한 비동기 요청 ID 관리로 최신 데이터 정합성 보장",
        },
        {
          title: "실시간성 개선 (SSE)",
          content:
            "WebSocket 대비 저비용 고효율의 SSE 도입으로 실시간 입찰 시스템 구축",
        },
        {
          title: "CI/CD 구축",
          content: "GitHub Actions를 통한 자동화로 배포 시간 80% 단축",
        },
      ],
      readmeContent: {
        overview:
          "실시간 경매와 커뮤니티가 결합된 플랫폼입니다. 저는 실시간 경매 화면 및 인증/검색/커뮤니티 핵심 UI와 전반적인 인프라(CI/CD) 설계를 담당했습니다.",
        problems: [
          {
            issue: "비동기 Race Condition으로 인한 데이터 불일치",
            solution:
              "검색 기능에서 검색 조건 변경 시 여러 비동기 요청이 동시에 발생하면서 이전 요청의 응답이 최신 상태를 덮어쓰는 문제가 있어, 이를 비동기 요청 간 Racecondition으로 분석했고, 렌더링과 무관하게 최신 요청을 식별할 수 있도록 useRef를 사용해 요청 ID를  관리했습니다.요청 시작 시마다 ID를 증가시키고 응답 시점에 최신 요청인지 검증하여 상태를 업데이트함으로써 항상 최신 검색 결과만 화면에 반영되도록 개선하여 UX를 향상시켰습니다.",
          },
          {
            issue: "불필요한 서버 요청으로 인한 네트워크 트래픽 최소화",
            solution:
              "회원가입 과정에서 잘못된 입력값으로 인한 서버 에러가 빈번하게 발생하는 문제를 해결하기 위해 클라이언트 단 유효성 검사 구조를 적용했습니다.              정규표현식 기반 입력 검증과 이메일 중복 체크 API를 연동해 유효하지 않은 요청을 사전에 차단하고, 다음 주소 검색 API를 활용해 입력 데이터 정확도를 개선하여 서버 부하 및 불필요한 네트워크 트래픽을 감소시켰습니다.",
          },
          {
            issue: "폴링 방식으로 인한 서버 부하 및 실시간성 문제 개선",
            solution:
              "실시간 경매 입찰 기능을 폴링 방식으로 구현하다 보니 입찰 UI가 즉시 반영되지 않고 서버에 주기적으로 요청하게 되면서 서버 부하 문제가 발생했습니다.WebSocket을 고려했지만, 서비스 특성상 클라이언트 단에서 서버에 데이터를 보내주지 않아도 되고, WebSocket은 SSE보다 연결관리와 서버 리소스 부담이 크기 때문에 단방향 스트리밍에 적합한 SSE를 도입했습니다. SSE 구현 후 입찰 데이터가 실시간으로 반영되면서 서버 부담을 줄이고, 사용자 경험을 개선할 수 있었습니다.",
          },
          {
            issue: "서버 개발 지연으로 인한 프론트엔드 개발 병목 해소",
            solution:
              "프로젝트 진행 중 서버 개발 지연으로 인해 API가 준비되지 않아 프론트엔드 기능 개발과 테스트가 지연되는 문제가 있었습니다. 이를 해결하기 위해 MSW를 도입했고, 실제 API 응답 구조를 기반으로 Mock 데이터를 생성하고, API 요청을 가로채 원하는 응답을 제공하도록 테스트 환경을 구성했습니다.덕분에 백엔드가 준비되지 않은 상태에서도 프론트엔드 기능을 정상적으로 개발하고 테스트할 수 있었으며, 실제 API 연동 시 문제없이 통합할 수 있어 개발 생산성과 협업 효율이 크게 향상 되었습니다.",
          },
          {
            issue: "API 요청 반복 및 보안 처리 문제 해결",
            solution:
              "API 요청 시 매번 토큰을 붙이고 공통 에러 처리를 반복해야 하는 문제를 해결하기 위해 Axios 인터셉터를 도입했습니다. 요청 인터셉터에 AccessToken을 자동 주입하고, 응답 인터셉트에서 공통 에러를 처리하도록 구현했습니다. 또한 AccessToken은 In-memory로 관리하고 RefreshToken은 HttpOnly Cookie로 분리해 XSS/CSRF 공격에 대응했습니다.덕분에 개발 생산성이 향상되고 보안 요소도 처리할 수 있었습니다.",
          },
          {
            issue: "초기 페이지 로딩 속도 저하 문제 개선",
            solution:
              "초기 페이지 로딩 시 모든 페이지가 번들에 포함되어 FCP가 2.5초로 느리고 사용자 경험이 저하되는 문제를 발견했습니다. 이를 개선하기 위해 React의 lazy와 Suspense를 활용해 페이지 단위 코드 스플리팅을 적용했습니다. 결과적으로 초기 번들 크기를 줄이고 필요한 페이지만 로드하도록 하여 FCP를 2.5초에서 1.2초로 단축하고, 사용자 경험과 유지보수성을 향상시켰습니다.",
          },
        ],
        results: [
          "초기 로딩 속도(FCP) 2.5s -> 1.2s 단축 (Code Splitting)",
          "SSE 관련 반복 코드 90% 제거",
          "배포 시간 10분 -> 2분 이내로 단축",
        ],
      },
    },
    {
      id: "bite-sns",
      title: "BITE-SNS (소셜 플랫폼)",
      period: "25.08 ~ 25.10",
      type: "Personal Project",
      tags: ["React", "Supabase", "Tanstack Query", "Zustand", "Tailwind"],
      description: "일상 공유와 소셜 상호작용을 중심의 개인 SNS 플랫폼",
      images: [
        "/public/bite/A.png",
        "/public/bite/B.png",
        "/public/bite/C.png",
        "/public/bite/D.png",
        "/public/bite/E.png",
        "/public/bite/F.png",
        "/public/bite/G.png",
      ],
      link: "https://bite-sns.vercel.app/",
      github: "https://github.com/Min-byeonghyun/VITE-SNS",
      features: [
        {
          title: "Optimistic Update",
          content: "좋아요/댓글 인터랙션에 즉각 반응하는 낙관적 업데이트 구현",
        },
        {
          title: "상태 관리 분리",
          content:
            "서버 상태(Tanstack Query)와 UI 상태(Zustand)의 명확한 역할 분담",
        },
      ],
      readmeContent: {
        overview:
          "단독 개발 프로젝트로, 실무에서 쓰이는 데이터 정합성 유지 기법과 메모리 관리 기술을 익히는 데 집중했습니다.",
        problems: [
          {
            issue: "동시 요청으로 인한 데이터 불일치 문제 해결",
            solution:
              "동시 요청 시 좋아요 카운트가 정확히 반영되지 않는 문제를 확인했습니다. 이를 해결하기 위해 Supabase에서 RPC 함수를 작성하고, 트랜잭션과 행 잡금을 적용하여 서버에서 좋아요 추가/삭제 로직을 처리했습니다. 또한 Tanstack Query의 onMutate를 활용해 클라이언트 UI가 서버 응답을 기다리지 않고 즉시 반영되도록 구현했습니다.결과적으로 여러 사용자가 동시에 좋아요를 눌러도 좋아요 개수가 정확히 증가/감소하며, 데이터 정합성과 사용자 경험을 동시에 개선할 수 있었습니다.",
          },
          {
            issue: "페이지 새로고침 시 전역 상태 초기화 문제 해결",
            solution:
              "페이지 새로고침 시 테마 상태가 초기화되는 문제가 있었습니다. 이를 해결하기 위해 Zustand의 persist를 활용해 테마 상태를 LocalStorage에 저장하고 초기 로드 시 불러와 적용하도록 구현했습니다.덕분에 사용자가 선택한 다크/라이트 모드가 유지되어 UX 일관성을 확보하고 상태 관리 효율을 향상시킬 수 있었습니다.",
          },
          {
            issue: "이미지 미리보기 메모리 누수 확인 및 해결",
            solution:
              "게시글 작성 시 이미지 업로드 기능에서 사용자가 선택한 이미지를 브라우저에서 미리보기로 보여주기 위해 URL.createObjectURL을 사용했는데, 생성된 미리보기 URL은 브라우저 메모리에 유지되므로, 반복적으로 이미지를 선택하면 메모리가 누적되는 문제가 발생했습니다. 이를 해결하기 위해 모달이 닫히거나 이미지가 삭제될 때 URL.revokeObjectURL을 호출해 미리보기 URL을 해제하도록 구현했습니다. 덕분에 불필요한 메모리 사용을 방지하고 장시간 사용 시 발생할 수 있는 메모리 누수를 예방할 수 있었습니다.",
          },
          {
            issue: "클라이언트/서버 상태 전략 분리로 재사용성과 일관성 확보",
            solution:
              "서버 데이터와 클라이언트 상태가 성격이 달라 단일 상태 관리 방식으로는 비효율이 발생할 수 있을 것 같다 생각했습니다. 서버 데이터는 쿼리 키 기반 캐싱과 동기화가 중요한 점을 고려해 TanStack Query로 관리하고 , 유저 세션, 모달, 테마 등 클라이언트 상태는 Zustand로 전역 관리 했습니다. 전역 상태는 커스텀 훅으로 캡슐화해 재사용성을 높이고, 상태 접근 방식을 일관되게 유지했습니다.",
          },
        ],
        results: [
          "동시성 요청 상황에서의 데이터 정합성 100% 확보",
          "클라이언트 상태와 서버상태 전략 분리로 재사용성과 일관성 확보",
          "UX 일관성을 위한 Persist 상태 유지",
        ],
      },
    },
    {
      id: "npm-library",
      title: "react-use-sse-event",
      period: "25.06 ~ 25.09",
      type: "Open Source (NPM Library)",
      tags: ["React", "Typescript", "SSE", "Library"],
      description:
        "반복적인 SSE 연결 관리와 메시지 파싱을 자동화하는 React 전용 라이브러리",
      images: ["/public/sse/sse.png"],
      link: "https://www.npmjs.com/package/react-use-sse-event?activeTab=readme",
      github: "https://github.com/Min-byeonghyun/react-use-sse-event",
      features: [
        {
          title: "NPM 배포 성과",
          content: "주간 다운로드 1500건 달성 및 실제 서비스 적용",
        },
        {
          title: "코드 효율화",
          content: "SSE 관련 반복 코드를 약 90% 감소시키는 커스텀 훅 구조",
        },
      ],
      readmeContent: {
        overview:
          "여러 프로젝트에서 반복되는 SSE 로직을 추상화하여 NPM 오픈소스로 배포.",
        problems: [
          {
            issue: "SSE 연결 관리의 번거로움",
            solution:
              "이벤트 이름과 콜백만 넘기면 내부에서 연결 해제 및 에러 처리를 자동 수행하는 훅을 설계했습니다.",
          },
        ],
        results: ["주간 다운로드 1500건 달성", "프로젝트 생산성 획기적 개선"],
      },
    },
    {
      id: "bh-books",
      title: "BH-books (개발 도서 추천)",
      period: "25.05 ~ 25.07",
      type: "Personal Project",
      tags: ["Next.js", "App Router", "React", "Server Actions"],
      description:
        "개발 도서 추천 및 실시간 리뷰 작성을 제공하는 Next.js 기반 플랫폼",
      images: [
        "/public/books/A.png",
        "/public/books/B.png",
        "/public/books/C.png",
      ],
      link: "https://bh-books-app.vercel.app/",
      github: "https://github.com/Min-byeonghyun/next-Library",
      features: [
        {
          title: "캐시 효율 최적화",
          content:
            "revalidateTag를 활용한 정밀한 캐시 무효화로 네트워크 요청 최소화",
        },
        {
          title: "사용자 경험(UX) 개선",
          content: "Suspense와 Skeleton UI를 적용하여 로딩 체감 속도 향상",
        },
      ],
      readmeContent: {
        overview:
          "Next.js의 서버 사이드 렌더링 역량을 강화하기 위해 진행한 개인 프로젝트입니다.",
        problems: [
          {
            issue: "불필요한 전체 페이지 재검증 문제 개선",
            solution:
              "도서 리뷰를 작성하거나 삭제할 때마다 페이지 전체를 재검증하는 구조를 사용하고 있었는데, 이로 인해 불필요한 네트워크 요청과 렌더링이 발생하는 문제가 있었습니다. 리뷰 생성/삭제 로직을 server Action에서 처리하고 revalidateTag를 활용해 리뷰 데이터에만 선택적으로 캐시를 무효화하도록 개선하여 리뷰 변경 시 성능과 캐시 효율을 개선했습니다.",
          },
          {
            issue: "서버 데이터 지연으로 인한 초기 화면 공백 문제 개선",
            solution:
              "도서 목록 페이지에서 서버 컴포넌트를 기반으로 데이터를 불러오다 보니, 데이터 응답이 지연되는 경우 화면 전체가 비어 보이는 문제가 발생했습니다. 초기에는 단순한 로딩 텍스트를 노출하는 방식으로 처리했지만, 이 방식은 서버 컴포넌트의 스트리밍 이점을 활용하지 못하고 UX 일관성도 떨어지는 한계가 있었습니다. 이를 해결하기 위해 React Suspense를 비동기 데이터 경계로 활용하고, fallback으로 도서 구조와 동일한 Skeleton UI를 제공하는 방식을 선택했습니다. 데이터가 도착했을 때 화면이 바뀌는 느낌이아니라 자연스럽게 채워지는 경험을 제공하도록 구현",
          },
          {
            issue: "메타데이터 부재로 인한 검색 및 SNS 미리보기 문제 개선",
            solution:
              "초기에는 페이지 메타데이터가 정적으로 클라이언트에서만 설정되어, 검색 엔진과 SNS 미리보기에서 콘텐츠 정보가 제대로 노출되지 않는 문제가 있었습니다. 이를 개선하기 위해 Next.js의 generateMetadata를 활용해 서버에서 도서 데이터를 기반으로 동적 메타데이터를 생성하도록 했습니다. 페이지 요청 시 서버에서 도서 상세 데이터를 조회하고 해당 데이터를 기반으로 title, description 등을 구성해 검색 엔진과 SNS 클롤러가 초기 HTML 단계에서 메타데이터를 인식할 수 있도록 처리했습니다.그 결과 각 도서 페이지가 콘텐츠에 맞는 메타 정보를 정확히 노출하게 되었고, 검색 결과 품질과 SNS 공유 시 미리보기 정확도를 동시에 개선할 수 있었습니다.",
          },
        ],
        results: ["불필요한 네트워크 트래픽 감소", "Lighthouse 성능 점수 개선"],
      },
    },
    {
      id: "pettalk",
      title: "PetTalk (애견 커뮤니티)",
      period: "24.05 ~ 24.06",
      type: "Personal Project",
      tags: ["React", "Firebase", "Kakao Map API", "Styled-components"],
      description: "반려인들의 정보 공유 및 지도 기반 애견샵 검색 플랫폼",
      images: [
        "/public/petTalk/A.png",
        "/public/petTalk/B.png",
        "/public/petTalk/C.png",
        "/public/petTalk/D.png",
        "/public/petTalk/E.png",
      ],
      link: "https://everycar-6008d.web.app/",
      github: "https://github.com/Min-byeonghyun/petTalk",
      features: [
        {
          title: "지도 API 활용",
          content:
            "외부 API활용과 firebase를 활용해 데이터 처리를 경험한 개인 프로젝트",
        },
        {
          title: "데이터 관리",
          content: "Firebase를 활용한 실시간 커뮤니티 게시판 구축",
        },
      ],
      readmeContent: {
        overview:
          "카카오맵 API를 활용해 위치에 맞는 애견샵을 제공하고, 커뮤니티를 통해 애견일상을 공유하는 플랫폼",
        problems: [
          {
            issue: "검색 결과 위치 인지 어려움 문제 해결",
            solution:
              "초기에는 Kakao Map API를 활용해 지도상 검색 위치를 마커로만 표시했기 때문에, 사용자가 위치를 직관적으로 파악하기 어려웠습니다. 이를 개선하기 위해 검색된 애견샵 데이터를 지도 마커와 리스트 형태로 함께 표시하고, 가게이름,주소,전화번호 정보를 제공하며, 지도 확대 기능까지 추가했습니다. 덕분에 사용자가 검색 결과를 쉽게 확인하고 위치를 파악할 수 있어 사용자 경험이 크게 개선되었습니다.",
          },
          {
            issue: "잘못된 페이지 이동 문제 해결",
            solution:
              "게시글 목록에서 페이지네이션 구현 초기에는 존재하지 않는 페이지 번호로도 이동이 가능해 게시글이 없는 페이지가 노출되는 문제가 발생했습니다. 이를 해결하기 위해 전체 페이지 수를 기준으로 페이지 버튼 배열을 동적으로 생성하고, 현재 페이지 상태에 따라 이전/다음 버튼 및 해당 페이지 버튼을 조건부로 비활성화하는 방식으로 개선했습니다.그 결과 페이지 범위를 벗어난 잘못된요청을 사전에 차단하고, 사용자가 항상 유효한 페이지 내에서만 탐색할 수 있도록 UX와 데이터 안정성을 함께 개선했습니다.",
          },
        ],
        results: ["사용자 검색 편의성 증대", "안정적인 페이지네이션 구현"],
      },
    },
  ];

  const activities = [
    {
      title: "제로베이스 프론트엔드 부트캠프",
      period: "24.01 ~ 24.11",
      desc: "웹 개발 기초 및 CS 지식 학습 (컴퓨터구조, 운영체제, 네트워크 등)",
    },
    {
      title: "모던 자바스크립트 Deep Dive 스터디",
      period: "24.03 ~ 24.05",
      desc: "자바스크립트 엔진 원리 및 핵심 개념 토론",
    },
    {
      title: "한 입 크기로 잘라 먹는 리액트 스터디",
      period: "25.05 ~ 25.07",
      desc: "리액트 심화 기능 이해 및 코드 리뷰 진행",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-blue-600">
            Min ByeongHyun
          </span>
          <div className="hidden md:flex gap-8 text-sm font-bold text-slate-500">
            <a href="#about" className="hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-blue-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="about"
        className="py-24 px-6 border-b border-slate-100 bg-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-8 text-sm font-bold text-blue-600 bg-blue-50 rounded-full">
            Front-end Developer
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-10 tracking-tight leading-[1.1]">
            {profile.name}
          </h1>
          <p className="text-2xl font-bold text-slate-800 mb-8 leading-tight">
            {profile.intro}
          </p>
          <div className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed space-y-4">
            <p>{profile.description}</p>
            <p className="text-slate-500 text-base font-medium">
              협업 측면에서는 GitFlow 전략, PR리뷰 문화, CI/CD 파이프라인 구축을
              주도하며 팀 생산성을 끌어올리는 역할을 수행했습니다. 기술 선택의
              이유를 설명할 수 있는 개발자가 되고자 합니다.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              className="px-6 py-3 bg-slate-900 text-white rounded-2xl hover:bg-slate-800 transition-all flex items-center gap-2 font-bold shadow-lg shadow-slate-200"
            >
              <Github size={20} /> GitHub
            </a>
            <a
              href={profile.blog}
              target="_blank"
              className="px-6 py-3 bg-white border-2 border-slate-200 rounded-2xl hover:border-blue-400 transition-all flex items-center gap-2 font-bold"
            >
              <Monitor size={20} /> Blog
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-16 flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
              <Code size={24} />
            </div>
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard title="Frontend" items={skills.frontend} color="blue" />
            <SkillCard
              title="State Management"
              items={skills.state}
              color="indigo"
            />
            <SkillCard title="Styling" items={skills.styling} color="sky" />
            <SkillCard
              title="Tools & Design"
              items={skills.tools}
              color="slate"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-black mb-4 flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                <Layers size={24} />
              </div>
              Projects
            </h2>
            <p className="text-slate-500 font-bold text-lg">
              단순한 코드 작성을 넘어, 문제를 해결하고 가치를 창출한
              결과물들입니다.
            </p>
          </div>

          <div className="grid gap-32">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group grid lg:grid-cols-12 gap-12 items-start"
              >
                <div className="lg:col-span-6 space-y-6">
                  <div className="relative overflow-hidden rounded-[2rem] aspect-video bg-slate-100 border-4 border-white shadow-2xl group-hover:shadow-blue-100 transition-all duration-500">
                    <ImageSlider images={project.images} />
                  </div>
                  <div className="flex gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        className="flex-1 py-3 px-4 bg-blue-50 text-blue-600 rounded-2xl text-sm font-black flex items-center justify-center gap-2 hover:bg-blue-100 transition-colors"
                      >
                        <ExternalLink size={18} /> LIVE DEMO
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-3 px-4 bg-slate-900 text-white rounded-2xl text-sm font-black flex items-center justify-center gap-2 hover:bg-slate-800 transition-all"
                    >
                      <FileText size={18} /> READ MORE
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      className="py-3 px-6 bg-slate-100 text-slate-700 rounded-2xl text-sm font-black flex items-center gap-2 hover:bg-slate-200 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase ${
                        project.type.includes("Team")
                          ? "bg-indigo-100 text-indigo-600"
                          : project.id === "npm-library"
                          ? "bg-orange-100 text-orange-600"
                          : "bg-emerald-100 text-emerald-600"
                      }`}
                    >
                      {project.type}
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="text-xs text-slate-500 font-bold flex items-center gap-1.5">
                      <Calendar size={14} /> {project.period}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black mb-6 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-8 text-lg font-medium leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-slate-50 text-slate-600 rounded-xl text-xs font-bold border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid gap-4">
                    {project.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex gap-4 p-5 bg-white rounded-2xl border-2 border-slate-50 hover:border-blue-100 transition-all shadow-sm"
                      >
                        <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                          <Zap size={20} />
                        </div>
                        <div>
                          <div className="font-black text-slate-900 mb-1">
                            {feature.title}
                          </div>
                          <div className="text-sm text-slate-500 font-medium leading-relaxed">
                            {feature.content}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* README Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedProject(null)}
          />
          <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-100 px-10 py-8 flex justify-between items-center z-10">
              <div>
                <div className="text-blue-600 text-xs font-black tracking-widest mb-1 uppercase">
                  PROJECT DOCUMENTATION
                </div>
                <h2 className="text-3xl font-black text-slate-900">
                  {selectedProject.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-3 bg-slate-100 hover:bg-slate-200 rounded-2xl transition-all"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-10 space-y-16">
              <section>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-xl font-black text-slate-700 mb-6">
                  <Monitor size={20} /> Overview
                </div>
                <p className="text-xl text-slate-600 leading-relaxed font-medium bg-blue-50/50 p-8 rounded-[2rem] border-2 border-blue-50 italic">
                  "{selectedProject.readmeContent.overview}"
                </p>
              </section>

              <section>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 rounded-xl font-black text-yellow-700 mb-8">
                  <Zap size={20} /> Problem Solving & Troubleshooting
                </div>
                <div className="grid gap-8">
                  {selectedProject.readmeContent.problems.map((p, i) => (
                    <div
                      key={i}
                      className="group border-2 border-slate-100 rounded-3xl overflow-hidden hover:border-blue-200 transition-all"
                    >
                      <div className="bg-slate-50 px-8 py-5 font-black text-slate-900 border-b-2 border-slate-100 flex items-start gap-4">
                        <span className="text-blue-600">Q.</span> {p.issue}
                      </div>
                      <div className="px-8 py-6 text-slate-600 leading-relaxed font-medium flex gap-4 bg-white">
                        <div className="shrink-0 mt-1.5">
                          <CheckCircle2 size={18} className="text-green-500" />
                        </div>
                        <div>{p.solution}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-slate-900 rounded-[2.5rem] p-10 text-white">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl font-black text-blue-300 mb-8">
                  <CheckCircle2 size={20} /> Key Results & Metrics
                </div>
                <ul className="grid md:grid-cols-2 gap-6">
                  {selectedProject.readmeContent.results.map((r, i) => (
                    <li
                      key={i}
                      className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 text-slate-300 font-bold items-center"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full" /> {r}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="px-10 py-8 bg-slate-50 border-t border-slate-100 flex justify-end gap-3 rounded-b-[2.5rem]">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-8 py-3 font-black text-slate-500 hover:text-slate-700"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Experience & Activities */}
      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black mb-16 flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Users size={24} />
                </div>
                Activities
              </h2>
              <div className="space-y-12">
                {activities.map((act, i) => (
                  <div
                    key={i}
                    className="relative pl-10 border-l-2 border-slate-700 group"
                  >
                    <div className="absolute w-5 h-5 bg-blue-600 rounded-full -left-[11px] top-1 ring-8 ring-slate-900 group-hover:scale-125 transition-transform" />
                    <div className="text-sm text-blue-400 font-black mb-2 uppercase tracking-widest">
                      {act.period}
                    </div>
                    <div className="text-2xl font-black mb-3">{act.title}</div>
                    <div className="text-slate-400 font-medium leading-relaxed">
                      {act.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-16">
              <div>
                <h2 className="text-3xl font-black mb-10 flex items-center gap-4 text-white">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                    <BookOpen size={24} />
                  </div>
                  Education
                </h2>
                <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700/50 backdrop-blur-sm">
                  <div className="text-sm text-blue-400 font-black mb-2 uppercase tracking-widest">
                    2017.03 ~ 2022.03
                  </div>
                  <div className="text-2xl font-black">경복대학교 IT보안과</div>
                  <div className="text-slate-400 mt-2 font-bold">
                    전문학사 졸업
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-black mb-10 flex items-center gap-4 text-white">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Package size={24} />
                  </div>
                  Certifications
                </h2>
                <div className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700/50 flex justify-between items-center">
                  <span className="font-black text-xl">컴퓨터활용능력 1급</span>
                  <span className="text-slate-400 font-bold text-sm bg-slate-900 px-4 py-2 rounded-xl">
                    2023.06
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-24 px-6 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-12">
            함께 성장하고 고민하고 싶습니다.
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mb-16 font-black text-slate-700">
            <div className="px-6 py-4 bg-slate-50 rounded-2xl flex items-center gap-3 border border-slate-100">
              <Mail className="text-blue-500" /> {profile.email}
            </div>
            <div className="px-6 py-4 bg-slate-50 rounded-2xl flex items-center gap-3 border border-slate-100">
              <Smartphone className="text-blue-500" /> {profile.phone}
            </div>
          </div>
          <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">
            © 2026 Min ByeongHyun. Portfolio.
          </p>
        </div>
      </footer>
    </div>
  );
};

const SkillCard = ({ title, items, color }) => {
  const colorMap = {
    blue: "bg-blue-600",
    indigo: "bg-indigo-600",
    sky: "bg-sky-500",
    slate: "bg-slate-700",
  };

  return (
    <div className="bg-white p-8 rounded-[2rem] border-2 border-slate-100 hover:border-blue-200 transition-all shadow-sm hover:shadow-xl hover:shadow-blue-50 group">
      <div
        className={`w-8 h-1.5 ${colorMap[color]} rounded-full mb-6 group-hover:w-16 transition-all duration-500`}
      />
      <h3 className="font-black text-slate-900 mb-6 text-sm uppercase tracking-widest">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-3 py-1.5 bg-slate-50 text-slate-700 rounded-xl text-xs font-black border border-slate-100 group-hover:bg-white group-hover:border-blue-100 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default App;
