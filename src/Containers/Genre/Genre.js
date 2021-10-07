import React, { Component } from 'react'
import { Button, Col, Row } from 'antd'
import { blue } from '@ant-design/colors'
import { connect } from 'react-redux'
import { fetchGenre, updateId } from '../../Redux/genreReducer/genreAction'
import style from './Genre.module.css'
import { Link } from 'react-router-dom'

class Genre extends Component {

    componentDidMount() {

        this.props.genreData();
    }

    handleGenre = id => {

        this.props.setId(id)
    }

    render() {

        return (
            <div>
                {
                    this.props.loading
                        ? 'Loading'
                        : this.props.error ? this.props.error
                            : this.props.data &&
                            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 10]}>
                                {
                                    this.props.data.map(genre => (
                                        <Col key={genre.id} lg={6} md={8} sm={12} xs={24}  >
                                            <Link to={`/Movies/${genre.name}`}>
                                                <Button
                                                    onClick={() => this.handleGenre(genre.id)}
                                                    id={genre.id}
                                                    type="primary"
                                                    block size={'large'}
                                                    className={`${style.btnHuge}`}
                                                    style={{ backgroundColor: blue[4] }}>
                                                    {genre.name}
                                                </Button>
                                            </Link>
                                        </Col>
                                    ))

                                }
                            </Row>
                }
            </div >
        )
    }
}

const mapStateToProps = (state) => ({

    loading: state.genre.loading,
    data: state.genre.data.genres,
    error: state.genre.error
})

const mapDispatchToProps = dispatch => ({

    genreData: () => dispatch(fetchGenre()),
    setId: id => dispatch(updateId(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(Genre)
