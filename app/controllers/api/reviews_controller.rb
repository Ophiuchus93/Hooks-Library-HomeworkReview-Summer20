class Api::ReviewsController < ApplicationController
  before_action :set_book
  before_action :set_review, only: [:update, :destroy]

  def index
    render json: @book.reviews
  end

  def show
  end

  def new

  end

  def create
    review = @book.reviews.new(review_params)

    if review.save
      render json: review
    else
      render json: { errors: review.errors }, status: :unprocessble_entity
    end
  end

  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: { errors: review.errors }, status: :unprocessble_entity
    end
  end

  def edit
  end

  def destroy
    @review.destroy
  end

  private
    def set_book
      @book = Book.find(params[:book_id])
    end

    def set_review
      @review = Review.find(params[:id])    
    end

    def review_params
      params.require(:review).permit(:title, :body, :book_id)
    end
end
