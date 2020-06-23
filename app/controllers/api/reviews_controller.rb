class Api::ReviewsController < ApplicationController
  before_action :set_book

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
  end

  def edit
  end

  def destroy
  end

  private
    def set_book
      @book = Book.find(params[:book_id])
    end

    def review_params
      params.require(:review).permit(:title, :body, :book_id)
    end
end
