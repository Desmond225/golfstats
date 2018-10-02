import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import {Data} from './RoundsData';

class PlayedRounds extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Grid>
      <Cell col={12}>
      <div class="pa4">
        <div class="overflow-auto">
          <table class="f6 w-100 mw8 center" cellspacing="0">

            <thead>
              <tr>
                <th class="fw6 bb b--black-20 tl pb3 pr3">Date</th>
                <th class="fw6 bb b--black-20 tl pb3 pr3">Course</th>
                <th class="fw6 bb b--black-20 tl pb3 pr3">Score</th>
                <th class="fw6 bb b--black-20 tl pb3 pr3">HCP old</th>
                <th class="fw6 bb b--black-20 tl pb3 pr3">HCP new</th>
              </tr>
            </thead>

            <tbody class="lh-copy">
              <tr>
                <td class="pv3 pr3 bb b--black-20">01-10-2018</td>
                <td class="pv3 pr3 bb b--black-20">Hoge dijk</td>
                <td class="pv3 pr3 bb b--black-20">71(E)</td>
                <td class="pv3 pr3 bb b--black-20">1.0</td>
                <td class="pv3 pr3 bb b--black-20">0.9</td>
              </tr>
              <tr>
                <td class="pv3 pr3 bb b--black-20">01-10-2018</td>
                <td class="pv3 pr3 bb b--black-20">Hoge dijk</td>
                <td class="pv3 pr3 bb b--black-20">71(E)</td>
                <td class="pv3 pr3 bb b--black-20">1.0</td>
                <td class="pv3 pr3 bb b--black-20">0.9</td>
              </tr>
              <tr>
                <td class="pv3 pr3 bb b--black-20">01-10-2018</td>
                <td class="pv3 pr3 bb b--black-20">Hoge dijk</td>
                <td class="pv3 pr3 bb b--black-20">71(E)</td>
                <td class="pv3 pr3 bb b--black-20">1.0</td>
                <td class="pv3 pr3 bb b--black-20">0.9</td>
              </tr>
              <tr>
                <td class="pv3 pr3 bb b--black-20">01-10-2018</td>
                <td class="pv3 pr3 bb b--black-20">Hoge dijk</td>
                <td class="pv3 pr3 bb b--black-20">71(E)</td>
                <td class="pv3 pr3 bb b--black-20">1.0</td>
                <td class="pv3 pr3 bb b--black-20">0.9</td>
              </tr>
              <tr>
                <td class="pv3 pr3 bb b--black-20">01-10-2018</td>
                <td class="pv3 pr3 bb b--black-20">Hoge dijk</td>
                <td class="pv3 pr3 bb b--black-20">71(E)</td>
                <td class="pv3 pr3 bb b--black-20">1.0</td>
                <td class="pv3 pr3 bb b--black-20">0.9</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      </Cell>

      </Grid>
  )
  }
}
export default PlayedRounds;
