import { observer } from "mobx-react";
import pacman from "../img/pacman.jpeg";

const TimerView = observer((props) => {
    const { timerState } = props;

    return(
        <>
            <h2>
                Seconds: {timerState.seconds}
            </h2>
            {/* <button onClick={() => timerState.reset()}>Reset timer</button> */}
            <div className="page">
		<div className="wall-bg">
			<ul>
				<li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
			</ul>
			<div className="wall-poster">
				<h1>game <span>over</span></h1>
				<i className="mr-akabei">
					<div className="mr-akabei-content">
						<span className="mr-akabei-eye-first"></span>
						<span className="mr-akabei-eye-second"></span>
						<span className="mr-akabei-bottom-1"></span>
						<span className="mr-akabei-bottom-2"></span>
						<span className="mr-akabei-bottom-3"></span>
						<span className="mr-akabei-bottom-4"></span>
						<span className="mr-akabei-bottom-5"></span>
						<span className="mr-akabei-bottom-6"></span>
						<span className="mr-akabei-bottom-7"></span>
					</div>
					<i className="point-first"></i>
					<i className="point-second"></i>
					<i className="point-third"></i>
					<i className="point-four"></i>
					<i className="point-last"></i>
				</i>
				<i className="mr-pacman">
					<i className="point-first"></i>
					<i className="point-second"></i>
					<i className="point-third"></i>
					<i className="point-four"></i>
				</i>
				<span>1980</span>
			</div>
			<div className="wall-desk">
				<div className="timer">
					<i className="timer-shadow"></i>
					<div className="timer-content">
						<div className="timer-hr">
                            <button
                                onClick={() => timerState.reset()}
                                style={{
                                    position: "absolute",
                                    top: "6px",
                                    left: "10px",
                                    color:"#110c1e",
                                    width: "10px",
                                    height: "10px",
                                    border: "none",
                                    background: "transparent",
                                    zIndex: 1000
                                }}>R</button>
							<div className="timer-digits">{timerState.seconds}</div>
						</div>
						<i className="timer-hr-right"></i>
					</div>
					<i className="timer-right"></i>
					<i className="timer-hr-first"></i>
					<i className="timer-hr-second"></i>
					<i className="timer-hr-third"></i>
					<i className="timer-hr-last"></i>
				</div>
				<i className="wall-desk-shadow"></i>
				<i className="wall-desk-bottom"></i>
				<i className="wall-desk-front"></i>
				<i className="wall-desk-right"></i>
			</div>
		</div>
		<div className="floor-bg"><div className="floor-hr"><i></i></div></div>

		<div className="tv-content">
			<div className="tv">
				<div className="tv-top"><i className="item-left"></i><i className="item-right"></i></div>
				<div className="tv-shadow"></div>
				<div className="tv-right"></div>
				<div className="tv-bottom">
					<ul><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>
					<i></i>
				</div>
				<div className="tv-screen"><a href="" className="pw-btn"></a><div className="tv-hr"><div className="tv-hr-2"><div className="tv-hr-3">
					<div className="tv-glass">
						<canvas></canvas>
						<div className="tv-glass-vintage">
							<ul><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>
							
							<i className="tv-noise"></i><i className="tv-noise-second"></i>
                            <p
                                className="reverse"
                            >{timerState.reverse}</p>
                            <img
                                src={pacman}
                                alt="pacman"
                                className="pacman"
                                style={{
                                    width: "308px",
                                    height: "254px"
                                }}
                            />
							<i className="tv-glow"></i>
						</div>
					</div>
					<div className="tv-flashing">
						<i className="tv-flashing-left"></i>
						<i className="tv-flashing-bottom"></i>
						<i className="tv-flashing-bottom-placeholder"></i>
					</div>
				</div></div></div></div>
			</div>
			<div className="tv-desk">
				<i className="tv-desk-shadow"></i>
				<i className="tv-desk-item-left-shadow"></i>
				<i className="tv-desk-item-left"></i>
				<i className="tv-desk-item-right-shadow"></i>
				<i className="tv-desk-item-right"></i>
				<i className="tv-desk-item-rear-shadow"></i>
				<i className="tv-desk-item-rear"></i>
				<i className="tv-desk-top"></i>
				<i className="tv-desk-front"></i>
				<i className="tv-desk-right"></i>
			</div>
		</div>

		<div className="console">
			<i className="console-shadow"></i>
			<div className="console-top">
				<i className="console-game-top"></i>
				<div className="console-top-panel">
					<i className="console-top-panel-item-1"></i>
					<i className="console-top-panel-item-2"></i>
					<i className="console-top-panel-item-3"></i>
					<i className="console-top-panel-item-4"></i>
					<i className="console-top-panel-item-5"></i>
					<i className="console-top-panel-item-6"></i>
					<i className="console-top-panel-item-7"></i>
					<i className="console-top-panel-item-8"></i>
				</div>
			</div>
			<i className="console-right-top"></i>
			<i className="console-right-bottom"></i>
			<div className="console-front-panel">
				<div className="front-panel-top">
					<i className="console-game"></i>
					<i className="console-power-dark"></i>
				</div>
				<div className="front-panel-bottom">
					<i className="console-power-indicator"></i>
					<i className="console-btn-first"></i>
					<i className="console-btn-second"></i>
					<div className="console-power">
						<div className="console-power-plug"><i></i></div>
						<i className="console-power-cable"></i>
					</div>
				</div>
			</div>
		</div>

		<div className="player-1">
			<div className="player-hand-left">
				<div className="hand-content">
					<i className="hand-left"></i><i className="hand-inner"></i>
					<i className="hair-item-1"></i>
					<i className="hair-item-2"></i>
					<i className="hair-item-3"></i>
					<i className="hair-item-4"></i>
					<i className="hair-item-5"></i>
					<i className="hair-item-6"></i>
					<i className="hair-item-7"></i>
					<i className="hair-item-8"></i>
					<i className="hair-item-9"></i>
					<i className="hair-item-10"></i>
					<i className="hair-item-11"></i>
					<i className="hair-item-12"></i>
					<i className="hair-item-13"></i>
					<i className="hair-item-14"></i>
					<i className="hair-item-15"></i>
					<i className="hair-item-16"></i>
				</div>
				<div className="finger-content"><i className="finger-placeholder"></i><i className="finger-touch"></i></div>
			</div>
			<div className="player-hand-right">
				<div className="hand-content">
					<i className="hand-left"></i><i className="hand-inner"></i>
					<i className="hair-item-1"></i>
					<i className="hair-item-2"></i>
					<i className="hair-item-3"></i>
					<i className="hair-item-4"></i>
					<i className="hair-item-5"></i>
					<i className="hair-item-6"></i>
					<i className="hair-item-7"></i>
					<i className="hair-item-8"></i>
					<i className="hair-item-9"></i>
					<i className="hair-item-10"></i>
					<i className="hair-item-11"></i>
					<i className="hair-item-12"></i>
					<i className="hair-item-13"></i>
					<i className="hair-item-14"></i>
					<i className="hair-item-15"></i>
					<i className="hair-item-16"></i>
				</div>
				<div className="finger-content"><i className="finger-placeholder"></i><i className="finger-touch"></i></div>
			</div>

			<div className="controller-nes"><i className="controller-nes-cable"></i><div className="in-controller-nes">
				<i className="controller-nes-pad"></i>
				<div className="controller-nes-option">
					<i className="hr-first"></i>
					<i className="hr-second"></i>
					<i className="hr-third"></i>
					<i className="hr-last"></i>
					<div className="controller-nes-option-btn"></div>
				</div>
				<div className="controller-nes-btn"><i></i><i></i></div>
			</div></div>
		</div>
	</div>
        </>
    );
});

export default TimerView;