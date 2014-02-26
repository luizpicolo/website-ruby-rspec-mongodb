ActiveAdmin.register_page "Dashboard" do

  menu :priority => 1, :label => proc{ I18n.t("active_admin.dashboard") }

  content :title => proc{ I18n.t("active_admin.dashboard") } do
    # div :class => "blank_slate_container", :id => "dashboard_default_message" do
    #   span :class => "blank_slate" do
    #     span I18n.t("active_admin.dashboard_welcome.welcome")
    #     small I18n.t("active_admin.dashboard_welcome.call_to_action")
    #   end
    # end

    # Here is an example of a simple dashboard with columns and panels.
    #

    charts = ChartController.new

    columns do
      column do
        panel "Articles by tags" do
            para bar_chart charts.articles_by_tags
        end
      end

      column do
        panel "Articles by Date" do
            para line_chart charts.articles_by_date
        end
      end

      column do
        panel "number of articles" do
          para "Articles Published:  #{Article.where(:status => 'published').count}"
          para "Articles Unpublished:  #{Article.where(:status => 'unpublished').count}"
        end
      end
    end
  end # content
end
