
import React from 'react';
import './Weekly.css';

const Weekly = () => {


    return (

        <div className="Forecast">

            <h1>Weekly Weather Forecast</h1>

            <table>
                <thead>
                    <tr>
                        <th>Monday</th>
                        <th className="expand">ins img</th>
                        <th>temperature</th>
                    </tr>


                    <br></br>

                    <tr>
                        <th>Tuesday</th>
                        <th className="expand">ins img</th>
                        <th>temperature</th>
                    </tr>

                    <br></br>
                    <tr>
                        <th>Wednesday</th>
                        <th className="expand">ins img</th>
                        <th>temperature</th>
                    </tr>
                    <br></br>
                    <tr>
                        <th>Thursday</th>
                        <th className="expand">ins img</th>
                        <th>temperature</th>
                    </tr>

                    <br></br>

                    <tr>
                        <th>Friday</th>
                        <th className="expand">ins img</th>
                        <th>temperature</th>
                    </tr>



                </thead>
            </table>

        </div>

    );
}

export default Weekly;


