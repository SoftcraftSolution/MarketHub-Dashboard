import React from 'react';
import './HeaderComponent.css';

const HeaderComponent = () => {
    return (
      <div>
          <div>Spot Price</div>
        <div className="headercomponent-container">
            
            <div className="headercomponenttabs">
                <button className="headercomponenttab-button">Sheet 7</button>
                <button className="headercomponenttab-button">Delhi</button>
                <button className="headercomponenttab-button">Copy</button>
                <button className="headercomponenttab-button">Pest</button>
                <button className="headercomponenttab-button">Other Rate</button>
                <button className="headercomponenttab-button">All India MSC</button>
            </div>
            <button className="categoryupdate-button">Update</button>

            <div className="categorytable-container">
                <table className='categorytable'>
                    <thead>
                        <tr>
                            <th className='headingcategory'>Delhi</th>
                            <th className='headingcategory'></th>
                            <th className='headingcategory'></th>
                            <th className='headingcategory'>L&M</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='datacategory'>COPPER</td>
                            <td className='datacategory'>819</td>
                            <td className='datacategory'>874</td>
                            <td className='datacategory'>ALUMINIUM</td>
                            <td className='datacategory'>190+</td>
                        </tr>
                        <tr>
                            <td className='datacategory'>ARM (BHATTI)</td>
                            <td className='datacategory'></td>
                            <td className='datacategory'>878</td>
                            <td className='datacategory'>PURAJA ENGINE</td>
                            <td className='datacategory'>194+</td>
                        </tr>
                        {/* Add more rows as necessary */}
                    </tbody>
                </table>
            </div>
        </div>
      </div>

    );
};

export default HeaderComponent;
