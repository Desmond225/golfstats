import React, {Component} from 'react';
import {data} from './Data';
import {rounds} from './Rounds';

const FairwaysInRegulation = (props) => {
  return(
    <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
    <h4>{props.Name}</h4>
    <ul>
    <li><i class="fas fa-bullseye"></i>{props.FIR}</li>
    <li><i class="fas fa-arrow-left"></i>{props.Left}</li>
    <li><i class="fas fa-arrow-right"></i>{props.Right}</li>
    </ul>
    </div>
  );
};

const GreensInRegulation = (props) => {
  return(
    <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
      <h4>{props.Name}</h4>
      <ul class="list pl0 measure center">
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30"><i class="fas fa-bullseye"></i>{props.GIR}</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30"><i class="fas fa-arrow-left"></i>{props.Miss}</li>
      </ul>
    </div>
  );
};

const ShortGame = (props) => {
  return(
    <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
    <h4>{props.Name}</h4>
    <ul>
    <li><i class="fas fa-bullseye"></i>{props.Scrambles}</li>
    <li><i class="fas fa-window-close"></i>{props.Sandies}</li>
    </ul>
    </div>
  );
};

const Rounds = (props) => {
  return(
  <div class="pa4">
  <div class="overflow-auto">
  <table class="f6 w-100 mw8 center" cellspacing="0">
    <thead>
      <tr>
        <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Round</th>
        <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Score</th>
        <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Score to par</th>
        <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Old HCP</th>
        <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">New HCP</th>
      </tr>
    </thead>
    <tbody class="lh-copy">
      <tr>
        <td class="pv3 pr3 bb b--black-20">{props.Round}</td>
        <td class="pv3 pr3 bb b--black-20">{props.Score}</td>
        <td class="pv3 pr3 bb b--black-20">{props.OldHCP}</td>
        <td class="pv3 pr3 bb b--black-20">{props.OldHCP}</td>
        <td class="pv3 pr3 bb b--black-20">{props.NewHCP}</td>
      </tr>
      <tr>
        <td class="pv3 pr3 bb b--black-20">{props.Round}</td>
        <td class="pv3 pr3 bb b--black-20">{props.Score}</td>
        <td class="pv3 pr3 bb b--black-20">{props.OldHCP}</td>
        <td class="pv3 pr3 bb b--black-20">{props.OldHCP}</td>
        <td class="pv3 pr3 bb b--black-20">{props.NewHCP}</td>
      </tr>
    </tbody>
  </table>
</div>
</div>
)
}

class Statistics extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <h1>Details of golfer:</h1>
          <FairwaysInRegulation Name={data[0].Name} FIR={data[0].FIR} Left={data[0].Left} Right={data[0].Right} />
          <GreensInRegulation Name={data[1].Name} GIR={data[1].GIR} Miss={data[1].Miss}/>
          <ShortGame Name={data[2].Name} Scrambles={data[2].Scrambles} Sandies={data[2].Sandies} />
          <Rounds Round={rounds[0].Round} Score={rounds[0].Score} OldHCP={rounds[0].OldHCP}  NewHCP={rounds[0].NewHCP}/>
      </div>
    );
  }
};


export default Statistics;
