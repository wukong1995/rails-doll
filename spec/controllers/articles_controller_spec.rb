require 'rails_helper'

RSpec.describe ArticlesController, type: :controller do
  describe "articles_controller" do
    # let(:count) { Article.count }  为什么不能以count作为参考值
    let(:article) { Article.create(title: "test title", text: "test text") }

    it "create successlly article" do
      expect(article).to eq(Article.find(article.id))
    end

    it "update article" do
      new_text = "update text"
      article.update(text: new_text)

      expect(article.text).to eq(new_text)
    end

    it "destroy article" do
      article.destroy

      expect(Article.find_by(id: article.id)).to eq(nil)
    end
  end
end
