import React from 'react';
import './style.css';

interface I_PROPS {}

const IntroPage: React.FC<I_PROPS> = () => {
    return (
        <div className="intro__wrap">
            <table className="table__warp">
                <tr>
                    <td>
                        <div className="box">
                            <img className="profile" src="/assets/imgs/dirty-jay.png"/>
                        </div>
                    </td>
                    <td>
                        <div className="box">
                            <img className="profile" src="/assets/imgs/dirty-chun.png"/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className="intro__name">
                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                            <a href="https://github.com/JAY-Chan9yu" target="_blank">
                                Dirty Jay
                            </a>
                        </span> (Backend/Django)
                    </td>
                    <td>
                        <span className="intro__name">
                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                            <a href="https://github.com/ginameee" target="_blank">
                                Dirty Chun
                            </a>
                        </span> (Fronted/React)
                    </td>
                </tr>
                <tr>
                    <td>
                        철이 없었죠... 개발이 좋아서 판교로 유학했다는 자체가<br />
                        저녁 늦게까지 불빛이 꺼지지 않는 그들의 열정을 안다면...<br />
                        개발을 더욱더 진지하게 대할 수 있게 되죠<br />
                    </td>
                    <td>
                        앙 춘모띠 (이건 춘이가 넣으삼 ㅋㅋ)
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default React.memo(IntroPage);
