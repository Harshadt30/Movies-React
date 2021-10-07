import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Col, Image, Row } from 'antd'
import { fetchMovies } from '../../Redux/movieReducer/movieAction'

const { Meta } = Card;
class Movies extends Component {

    constructor(props) {
        super(props)

        this.state = {
            visible: false
        }
    }


    componentDidMount() {
        let genreId = this.props.genreId
        if (genreId === 0) {

            this.props.movieData(`https://api.themoviedb.org/3/discover/movie?api_key=b2f74f99038f05879b5e3be6c3411afe&with_genres=`)
        } else {

            this.props.movieData(`https://api.themoviedb.org/3/discover/movie?api_key=b2f74f99038f05879b5e3be6c3411afe&with_genres=${genreId}`)
        }
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
                                    this.props.data.map(movie => (
                                        <Col key={movie.id} lg={6} md={8} sm={12} xs={24}>
                                            <Card
                                                cover={

                                                    <Image
                                                        onClick={() => this.setState({ visible: !this.state.visible })}
                                                        preview={{ visible: false }}
                                                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                                    />
                                                }

                                            >
                                                <Meta
                                                    title={movie.title}
                                                    description={movie.vote_average}
                                                />
                                            </Card>
                                        </Col>
                                    ))
                                }
                            </Row>
                }
            </div>
        )
    }
}
const mapStateToProps = state => ({

    genreId: state.genre.genreId,
    loading: state.movie.loading,
    data: state.movie.data.results,
    error: state.movie.error
})

const mapDispatchToProps = dispatch => ({

    movieData: url => dispatch(fetchMovies(url))
})


export default connect(mapStateToProps, mapDispatchToProps)(Movies)
