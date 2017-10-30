class CommentsController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    @article = Article.find(params[:article_id])
    @comment = @article.comments.create(comment_params)
    redirect_to article_path(@article)
  end

  def destroy
    @article = Article.find(params[:article_id])
    @comment = @article.comments.find(params[:id])
    @comment.destroy!
    render json: { success_code: 1}
  end

  private
    def comment_params
      params.require(:comment).permit(:commenter, :body)
    end
end
