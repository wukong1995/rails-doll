require 'rails_helper'

RSpec.describe ArticlesController, type: :controller do
  # let(:count) { Article.count }  为什么不能以count作为参考值

  let(:article) { FactoryGirl.create(:article) }

  describe "create successly" do
    it "get article" do
      expect(Article.find_by(id: article.id)).to eq(article)
    end
  end

  describe "Get #index" do
    it "return 200" do
      get :index
      expect(response).to be_success
    end
  end

  describe "Get #show" do
    it "return 200" do
      get :show, params: { id: article.id }
      expect(response).to be_success
    end
  end

  describe "Get #edit" do
    it "return 200" do
      get :show, params: { id: article.id }
      expect(response).to be_success
    end
  end

  describe "Patch #update" do
    it "return 200" do
      new_text = "update text"
      patch :update, params: { id: article.id, article: {title: new_text} }
      expect(article.reload.title).to eq(new_text)
    end
  end

  describe "Delete #destroy" do
    it "get nil" do
      delete :destroy, params: {id: article.id}
      expect(Article.find_by(id: article.id)).to eq(nil)
    end
  end

end
