import React from 'react'
import "./Pagination.css"

const Pagination = ({productPerPage,currentPage,totalProducts ,paginate}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                <button onClick={() => {
                    if (currentPage > 1) {
                        paginate(currentPage - 1)
                    }
                }}>Prev</button>

                {pageNumbers.map(number => (
                    <li key={number} className={(currentPage === number) ? "page-item page-active" : 'page-item'} onClick={() => paginate(number)} >
                        <span className='page-link'>
                            {number}
                        </span>
                    </li>
                ))}
                <button onClick={() => {
                    if (currentPage < pageNumbers.length) {
                        paginate(currentPage + 1)
                    }
                }}>Next</button>
            </ul>
        </nav>
    )
}

export default Pagination
