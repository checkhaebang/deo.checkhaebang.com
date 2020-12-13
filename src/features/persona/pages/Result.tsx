/**
 * /persona/analyzing 페르소나 분석결과 화면
 */
import React, { CSSProperties, ReactElement } from "react";
import reactStringReplace from "react-string-replace";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

import { facebookIcon, kakaoIcon, urlIcon } from "~/assets";
import { color } from "~/colors";
import PersonaMapper from "~/features/persona/models/mapper";

type ThumbnailProps = {
  persona: string;
  recommend: string;
  persona_img: string;
};

function Thumbnail({
  persona,
  recommend,
  persona_img,
}: ThumbnailProps): ReactElement {
  return (
    <Helmet
      title={`당신의 자취 유형은 ${persona}!`}
      meta={[
        {
          property: "og:title",
          content: `당신의 자취 유형은 ${persona}!`,
        },
        {
          property: "og:description",
          content: `추천공간 : ${recommend}`,
        },
        {
          property: "og:image:url",
          content: `https://checkhaebang.netlify.app${persona_img}`,
        },
        {
          property: "og:image:secure_url",
          content: `https://checkhaebang.netlify.app${persona_img}`,
        },
        { property: "og:image:type", content: "image/png" },
        { property: "og:image:width", content: "360" },
        { property: "og:image:height", content: "210" },
      ]}
    />
  );
}

type Props = {
  persona_id: number;
  persona: string;
  recommend: string;
  description: string;
  underline: string;
};

export default function Result(): ReactElement {
  const { persona, recommend, description } = mock();
  const history = useHistory();
  const _description = reactStringReplace(
    description,
    /<hr>(.*)<\/hr>/g,
    (match, i) => (
      <span key={i} style={{ backgroundColor: color.secondaryYellow }}>
        {match}
      </span>
    )
  );
  const persona_img = PersonaMapper(persona);
  console.log(persona, persona_img);
  return (
    <div style={page_style()}>
      <Thumbnail
        persona={persona}
        recommend={recommend}
        persona_img={persona_img}
      />
      <div style={타이틀_style()}>
        <div style={당신의_자취유형은_style()}>당신의 자취 유형은</div>
        <div style={페르소나_이름_style()}>{mock().persona}</div>
      </div>
      <img
        style={{ height: 210, width: 360 }}
        src={persona_img}
        alt="persona0"
      />
      <p style={추천항목_style()}>{mock().recommend}</p>
      <p style={추천설명_style()}>{_description}</p>
      <div style={{ marginLeft: 109, marginTop: 39 }}>
        {[facebookIcon, kakaoIcon, urlIcon].map((icon, index) => (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img
            key={index}
            style={{ cursor: "pointer", marginRight: 8 }}
            src={icon}
          />
        ))}
      </div>
      <div
        style={체크리스트_보러가기_버튼_style()}
        onClick={() => {
          console.log("go");
          history.push("/checklist/creating");
        }}
      >
        <p style={체크리스트_보러가기_버튼_텍스트_style()}>
          나만의 체크리스트 보러가기
        </p>
      </div>
      <div style={유형진단_다시하기_버튼_style()}>
        <p style={유형진단_다시하기_버튼_텍스트_style()}>{mock().underline}</p>
        <div style={유형진단_다시하기_버튼_밑줄_style()} />
      </div>
    </div>
  );
}

const mock = (): Props => ({
  persona_id: 0,
  persona: "꼼꼼한 집순이/집돌이",
  recommend: "추천공간: 오피스텔, 주상복합",
  description: `집에서 오래지내는 만큼 <hr>이중 방문 구조</hr>에 거주하는 것이 현명하고, 10층 이하 대로변 건물은 피해주세요!\n집순이/집돌이에게는 <hr>주변 생활 편의 시설이 중요</hr>하겠죠? 자취방 500m 근처에 편의점, 마트, 병원, 공원이나 산책로가 있는지 꼭 확인해보세요!`,
  underline: "유형 진단 다시하기",
});

const page_style = (): CSSProperties => ({
  height: 660,
  width: 360,
  backgroundColor: color.grayscalef9,
});

const 타이틀_style = (): CSSProperties => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  width: 360,
  height: 89,
});

const 당신의_자취유형은_style = (): CSSProperties => ({
  margin: "24px 211px 0 24px",
  width: 125,
  height: 22,
  fontSize: 16,
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.34,
  letterSpacing: "normal",
});

const 페르소나_이름_style = (): CSSProperties => ({
  margin: "0 24px 8px 24px",
  width: 312,
  height: 35,
  fontSize: 26,
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.33,
  letterSpacing: "normal",
});

const 추천항목_style = (): CSSProperties => ({
  margin: "0 139px 0 24px",
  width: 197,
  height: 22,
  fontSize: 16,
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
});

const 추천설명_style = (): CSSProperties => ({
  margin: "12px 24px 0 24px",
  width: 312,
  height: 90,
  fontSize: 12,
  lineHeight: 1.46,
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  whiteSpace: "pre-wrap",
});

const 체크리스트_보러가기_버튼_style = (): CSSProperties => ({
  display: "flex",
  justifyContent: "center",
  width: 312,
  height: 54,
  margin: "16px 24px 0 24px",
  backgroundColor: color.primaryYellow,
  cursor: "pointer",
  borderRadius: 4,
  boxShadow: "0 1px 1px 0 rgba(0,0,0,0.03)",
});

const 체크리스트_보러가기_버튼_텍스트_style = (): CSSProperties => ({
  fontSize: 16,
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.34,
});

const 유형진단_다시하기_버튼_style = (): CSSProperties => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: 94,
  height: 37,
  margin: "8px 132px 0px 134px",
  fontSize: "12px",
  fontWeight: "bold",
  cursor: "pointer",
});

const 유형진단_다시하기_버튼_텍스트_style = (): CSSProperties => ({
  width: 94,
  height: 16,
  opacity: 0.5,
  fontSize: 12,
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  //   lineHeight: 1.29,
  letterSpacing: "normal",
  textAlign: "center",
  margin: 0,
  color: color.grayscale29,
});

const 유형진단_다시하기_버튼_밑줄_style = (): CSSProperties => ({
  width: 94,
  height: 2,
  opacity: 0.5,
  marginTop: 2,
  backgroundColor: color.grayscale29,
});
