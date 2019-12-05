import React, { useState } from 'react';
import Navbar from './../Components/Navbar';
import { Container, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import styles from './PostPage.module.css';
import placeholder from './../Assets/1.png';

import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';


import axios from 'axios'; 

const CreatePost = () => {
    const [ postHeader, setPostHeader ] = useState('');
    const [postSubHeader, setPostSubHeader] = useState('');
    const [ postContent, setPostContent] = useState('');
    const [ image, setImage ] = useState(placeholder);

    const onUploadImage = (e)=>{
        let reader = new FileReader();

        reader.readAsDataURL(e.target.files[0]);

        reader.onload = e => {
            console.log(e.target.result);
            setImage(e.target.result);
        };
    }

    const onSubmit = ()=>{
        let postData = {
            heading: postHeader,
            subheading: postSubHeader,
            content : postContent,
            image: image
        }

        createPost(postData);

        
    }

    const createPost = async(postData)=>{
        const response = await axios.post('http://localhost:4000/api/posts/add', postData);
        setPostHeader('');
        setPostContent('');
        setImage(placeholder);
        console.log(response);
    }

    return (
        <Container className="my-5">
            <Col sm={10} className="m-auto">
                <Navbar brand="true" />
            </Col>

            <Col sm={8} className="m-auto">

                <main className="my-5">
                    {/* <h1 style={{ fontSize: '1.75em' }} className="text-center mb-3">
                        <Editor
                            tag="div"
                            text={postHeader}
                            onChange={(header) => setPostHeader(header)}
                            options={
                                {
                                    placeholder: {
                                        text: 'Post heading here',
                                    }
                                }
                            }
                        />
                    </h1> */}

                    <Form>
                        <FormGroup>
                            <Label>Post Heading</Label>
                            <Input type="text" onChange={(e)=>{ setPostHeader(e.target.value) }} placeholder="Post heading here" />
                        </FormGroup>

                        <FormGroup className="mt-5">
                            <Label>Post subHeading</Label>
                            <Input type="text" onChange={(e) => { setPostSubHeader(e.target.value) }} placeholder="Post heading here" />
                        </FormGroup>
                    </Form>

                    <input type="file" className="my-4" onChange={(e) => onUploadImage(e)} />

                    <div className={styles.image}>
                        <img src={image} alt="postImage" className="w-100 h-100 img-fluid" />
                    </div>

                    <div className="text-content my-3" style={{ fontSize: '.8em', color: '#718096' }}>
                        26th January 2019
                    </div>

                <div style={{ lineHeight: '30px' }} className="text-content">
                        <Editor
                            text={postContent}
                            onChange={(content) => setPostContent(content)}
                            options={
                                {
                                    placeholder: {
                                        text: 'Start writing content here',
                                    },
                                    toolbar: { 
                                        buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote', 'justifyCenter', 'orderedlist', 'unorderedlist'] 
                                    } 
                                }
                            }
                        />
                </div>

                <div className="mt-5 text-right rounded-0">
                    <button onClick={onSubmit} className="btn btn-primary">Create post</button>
                </div>

                </main>
            </Col>
        </Container>
    );
}

export default CreatePost;