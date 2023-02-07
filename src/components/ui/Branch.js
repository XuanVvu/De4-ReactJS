import React, { Fragment } from 'react'
import { BRANCH_DATA } from '../../assets/data/data'
import { Link } from 'react-router-dom'
import "../../scss/style.scss"

const Branch = () => {
  return (
    <Fragment>
        <div className="branch container">
          <div className="row">
            {
                BRANCH_DATA.map(item => (
                    <div className="branch-item" key={item.id}>
                        <Link to="#"><img src={item.imgUrl} alt="" /></Link>
                    </div>

                ))
            }

          </div>
        </div>
    </Fragment>
  )
}

export default Branch