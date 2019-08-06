import React, { Component } from 'react';
import Ball from './Ball';

function getWinNumbers(){
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v , i) => i + 1);
    const shuffle = [];
    while(candidate.length > 0){
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }       
    const bonusNumber = shuffle[shuffle.length -1];
    const winNumbers = shuffle.slice(0,6).sort((p , c) => p - c);
    return [...winNumbers , bonusNumber];
}


class Lotto extends Component {

    state = {
        winNumbers: getWinNumbers(),
        winBalls: [],
        bonus: null,
        redo: false,
    };

    timeouts = [];

    runTimeouts = () => {
        console.log('runTimeouts');
        // 당첨공 6개

        const {winNumbers} = this.state;
        for(let i=0; i<winNumbers.length-1; i++){
            this.timeouts[i] = setTimeout(() => {
                this.setState((prevState) => {
                    return {
                        winBalls: [...prevState.winBalls , winNumbers[i]],
                    }
                });
            }, (i + 1) * 1000);
        }
        //보너스공
        this.timeouts[6] = setTimeout(() => {
            this.setState({
                bonus: winNumbers[6],
                redo: true,
            });
        }, 7000);
    }

    componentDidMount = () => {
        this.runTimeouts();
    }

    componentDidUpdate = (prevProps , prevState) => {
        console.log('componentDidUpdate');
        if(this.state.winBalls.length === 0){ // 한번 더 버튼을 눌렀을때에만 동작하게
            // 이외에도 bonus 가 null일때 , redo가 false일때에도 가능
            this.runTimeouts();
        }
    }

    componentWillUnmount = () => {
        this.timeouts.forEach((v) => {
            clearTimeout(v);
        });
    }

    onClickRedo = () => {
        console.log('onClickRedo');
        this.setState({
            winNumbers: getWinNumbers(),
            winBalls: [],
            bonus: null,
            redo: false,
        });
        this.timeouts = [];
    };

    render() {
        const {winBalls , bonus , redo} = this.state;
        return (
            <div>
                <div>당첨 숫자</div>
                <div id="resultWindow">
                    {winBalls.map((v) => <Ball key={v} number={v} />)}
                </div>
                <div>보너스!</div>
                {bonus && <Ball number={bonus} />}
                {redo && <button onClick={this.onClickRedo}>한번 더</button>}
            </div>
        );
    }
}

export default Lotto;