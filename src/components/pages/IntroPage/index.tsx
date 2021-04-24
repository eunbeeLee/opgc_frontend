import React from 'react';
import './style.css';
import { MEMBERS } from './constants';
import Member from './Member';

interface I_PROPS {}

const IntroPage: React.FC<I_PROPS> = () => {
    return (
        <div className="intro__wrap">
            <div className="intro__title">
                인싸가 되고싶은 OPGC 개발자들입니다.
            </div>
            <div className="intro__members">
                {MEMBERS.map((member) => (
                    <Member data={member} key={member.name} />
                ))}
            </div>

            <div className="qna-list">
                <div className="qna">
                    <div className="qna__question">
                        <img
                            className="profile"
                            src="/assets/imgs/logo-new.png"
                        />
                        <span>OPGC 웹사이트를 만들게 된 계기는?</span>
                    </div>
                    <div className="qna__answer">
                        OP.GG라는 LOL 전적 확인 사이트를 사용하다가, 개발자들의
                        전적(?), 랭킹을 확인하는 사이트가 있으면 재밌을 것
                        같다고 생각했어요
                        <br />
                        그래서 뭔가 OP.GG를 오마주 해서{' '}
                        <span>OPGC (Over Programmed Good Coding)</span>라고
                        이름을 지었죠.
                    </div>
                </div>
                <div className="qna">
                    <div className="qna__question">
                        <img
                            className="profile"
                            src="/assets/imgs/logo-new.png"
                        />
                        <span>왜 팀명이 Dirty Boyz 인가요?</span>
                    </div>
                    <div className="qna__answer">
                        음...ㅋㅋㅋ Dirty가 '더러운' 이라는 의미긴 하지만 저희는
                        <span>Dirty Sexy</span> 이런 느낌을 담았어요.
                        <br />
                        '내 아내의 모든것' 이라는 영화에 나오는 류승룡님에게
                        많은 영감을 얻었습니다.
                        <br />
                        굳이 의미를 거창하게 정하자면
                        <span>
                            "우리 뭐든 할수있다! 겁먹지 말자! 세상아 덤벼라!
                            우린 더티섹시한 개발자들이다!"
                        </span>
                        입니다...(사실 술마시다가 정함)
                    </div>
                </div>
                <div className="qna">
                    <div className="qna__question">
                        <img
                            className="profile"
                            src="/assets/imgs/logo-new.png"
                        />
                        <span>로고는 어떻게 만들게 되었나요?</span>
                    </div>
                    <div className="qna__answer">
                        <img
                            className="logo__history"
                            src="/assets/imgs/logo-history.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(IntroPage);
