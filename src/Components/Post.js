import React from 'react';
import { Row, Col } from 'reactstrap';
// import pic1 from './../Assets/1.png';
// import pic2 from './../Assets/2.png';
import { Link } from 'react-router-dom';
import styles from './Post.module.css';
import Moment from 'react-moment';

const Post = (props) => {

    // let content;
    // let heading;

    // mapping through posts so we can assign to createMarkup
    // props.posts.map(posts =>{
    //     return(
    //         content = `${posts.content.substring(0, 160)}...`
    //     );
    // })

    // let createMarkup = () => {
    //     return { __html: content};

    // }

    return (
        <>
            {
                (props.posts.length > 0 ? 
                    props.posts.reverse().map((posts, index) =>{
                        // let date = new Date(posts.created);
                        // console.log(date.toTimeString())
                        // // I have no idea how this works BUT DON'T FUCKING TOUCH!!!
                        // let parsedHeading = document.createRange().createContextualFragment(posts.heading);
                    
                        return(
                            <Row key={posts._id} className="py-5 border-bottom">
                                <Col md={7} className="order-2 order-md-1 mt-4 my-md-auto">
                                    <div className="d-flex flex-column flex-md-row justify-content-between">

                                        <h2 style={{ fontSize: '1.25em' }} className="mb-0 mb-md-2">{posts.heading}</h2>

                                        <span className="text-content mt-md-1" style={{ fontSize: '.8em', color: '#718096' }}>
                                            <Moment fromNow>
                                                {posts.created}
                                            </Moment>
                                        </span>
                                    </div>

                                    <div className="text-content mt-3 mt-md-0 mb-3">
                                        { posts.subheading }
                                    </div>

                                    <Link className="d-flex" style={{ textDecoration: 'none' }} to={`/post/${posts._id}`}>
                                        Read more
                    
                                    <svg className="ml-1 my-auto" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.00001 2.33333L6.17751 3.15583L9.43251 6.41666H2.33334V7.58333H9.43251L6.17751 10.8442L7.00001 11.6667L11.6667 6.99999L7.00001 2.33333Z" fill="#434190" />
                                        </svg>
                                    </Link>

                                </Col>

                                <Col md={5} className="order-1 order-md-2">

                                    {/* <div style={{ background: `url(${posts.image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className={styles.imageStyle}>
                                    </div> */}

                                    <img src={posts.image} className="img-fluid w-100 shadow-sm" style={{ objectFit: "cover", height: "170px" }} />
                                </Col>
                            </Row>
                        );
                    }   
                )
                : <p className="text-center mt-5 pt-5 text-dark">Fetching Posts.............</p>)
            }
        </>
    );
}

export default Post;