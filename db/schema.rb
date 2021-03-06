# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_03_09_142502) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "tag", default: 1
    t.integer "goal_id"
    t.integer "created_by_user_id"
    t.boolean "disabled", default: false
    t.integer "gym_id"
    t.index ["gym_id"], name: "index_categories_on_gym_id"
  end

  create_table "common_equipments", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "common_exercises", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "gym_id"
    t.string "video_file_name"
    t.string "video_content_type"
    t.bigint "video_file_size"
    t.datetime "video_updated_at"
    t.index ["gym_id"], name: "index_common_exercises_on_gym_id"
  end

  create_table "daily_log_foods", force: :cascade do |t|
    t.integer "food_id"
    t.integer "daily_log_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "qty", default: 1, null: false
  end

  create_table "daily_logs", force: :cascade do |t|
    t.date "calendar_date"
    t.integer "daily_log_food_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "dislikes", force: :cascade do |t|
    t.integer "workout_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "exercise_circuits", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "exercises", force: :cascade do |t|
    t.text "description"
    t.binary "example"
    t.text "instructions"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "warm_up", default: false
    t.string "warm_up_details", default: ""
    t.string "rep_range", default: ""
    t.integer "set_count", default: 3
    t.integer "exercise_circuit_id"
    t.integer "priority"
    t.boolean "disabled", default: false
    t.boolean "band", default: false
    t.boolean "timed_exercise", default: false
    t.integer "time_by_seconds", default: 60
    t.integer "common_exercise_id", null: false
    t.integer "common_equipment_id", null: false
    t.integer "workout_id", null: false
    t.string "video_file_name"
    t.string "video_content_type"
    t.bigint "video_file_size"
    t.datetime "video_updated_at"
    t.string "exercise_video_url"
    t.index ["workout_id"], name: "index_exercises_on_workout_id"
  end

  create_table "fitness_classes", force: :cascade do |t|
    t.integer "gym_id"
    t.string "name"
    t.integer "duration"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["gym_id"], name: "index_fitness_classes_on_gym_id"
  end

  create_table "food_group_pairings", force: :cascade do |t|
    t.integer "food_group_id"
    t.integer "food_id"
    t.integer "serving_qty"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "food_groups", force: :cascade do |t|
    t.string "name"
    t.integer "gym_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
  end

  create_table "foods", force: :cascade do |t|
    t.string "name"
    t.string "category"
    t.integer "calories", default: 0
    t.float "protein", default: 0.0
    t.float "carbs", default: 0.0
    t.float "fat", default: 0.0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "created_by_user_id"
    t.string "serving_size", default: "", null: false
  end

  create_table "goals", force: :cascade do |t|
    t.integer "user_id", null: false
    t.text "comment", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_goals_on_user_id"
  end

  create_table "gym_admins", force: :cascade do |t|
    t.integer "gym_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["gym_id", "user_id"], name: "index_gym_admins_on_gym_id_and_user_id"
  end

  create_table "gyms", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "city"
    t.string "state"
    t.string "zipcode"
    t.string "phone_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "time_zone", default: "EST"
    t.string "logo_file_name"
    t.string "logo_content_type"
    t.bigint "logo_file_size"
    t.datetime "logo_updated_at"
    t.string "subdomain"
    t.integer "protein_threshold", default: 30
    t.integer "carb_limit", default: 50
  end

  create_table "inboxes", force: :cascade do |t|
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_inboxes_on_user_id"
  end

  create_table "kiosks", force: :cascade do |t|
    t.integer "kiosk_number", null: false
    t.integer "gym_id", null: false
    t.integer "exercise_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["kiosk_number", "gym_id", "exercise_id"], name: "by_kiosk_gym_exercise_id"
  end

  create_table "likes", force: :cascade do |t|
    t.integer "workout_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["workout_id"], name: "index_likes_on_workout_id"
  end

  create_table "measurements", force: :cascade do |t|
    t.integer "user_id"
    t.integer "upper_arm", default: 0
    t.integer "chest", default: 0
    t.integer "waist", default: 0
    t.integer "hip", default: 0
    t.integer "thigh", default: 0
    t.integer "calf", default: 0
    t.integer "wrist", default: 0
    t.integer "forearm", default: 0
    t.integer "left_tricep", default: 0
    t.integer "right_tricep", default: 0
    t.integer "subscapular", default: 0
    t.integer "abdominal", default: 0
    t.integer "mid_thigh", default: 0
    t.integer "inside_calf", default: 0
    t.integer "pec", default: 0
    t.integer "left_bicep", default: 0
    t.integer "right_bicep", default: 0
    t.integer "suprailiac", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_measurements_on_user_id"
  end

  create_table "message_groups", force: :cascade do |t|
    t.integer "inbox_id"
    t.string "subject", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["inbox_id"], name: "index_message_groups_on_inbox_id"
  end

  create_table "messages", force: :cascade do |t|
    t.text "detail"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "message_group_id"
    t.integer "user_id"
    t.boolean "read", default: false
    t.integer "recipient_id"
    t.index ["message_group_id"], name: "index_messages_on_message_group_id"
  end

  create_table "sessions", force: :cascade do |t|
    t.integer "workout_class_id"
    t.integer "day"
    t.text "class_time"
    t.integer "duration"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "meridiem", default: "AM", null: false
  end

  create_table "task_records", id: false, force: :cascade do |t|
    t.string "version", null: false
  end

  create_table "tasks", force: :cascade do |t|
    t.string "name", null: false
    t.integer "gym_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "duration"
    t.boolean "select_client", default: false
  end

  create_table "time_cards", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "task_id", null: false
    t.datetime "start_time", null: false
    t.datetime "end_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "client_id"
    t.boolean "manual_entry", default: false
  end

  create_table "user_notes", force: :cascade do |t|
    t.integer "user_id"
    t.text "note", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_previous_workouts", force: :cascade do |t|
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "workout_id"
    t.date "workout_date"
    t.index ["user_id"], name: "index_user_previous_workouts_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.integer "height", default: 0, null: false
    t.integer "weight", default: 0, null: false
    t.string "phone_number"
    t.integer "regularity_id", default: 0, null: false
    t.integer "goal_id", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.integer "gym_id"
    t.integer "current_workout"
    t.integer "pin"
    t.integer "current_workout_group"
    t.boolean "trainee", default: true
    t.boolean "trainer", default: false
    t.integer "trainer_id"
    t.string "avatar_file_name"
    t.string "avatar_content_type"
    t.bigint "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.text "medical_concerns"
    t.boolean "account_disabled", default: false
    t.boolean "not_a_robot", default: false
    t.boolean "employee", default: false
    t.integer "tdee", default: 0
    t.boolean "nutrition_only", default: false
    t.integer "protein_total", default: 0, null: false
    t.integer "carb_total", default: 0, null: false
    t.integer "fat_total", default: 0, null: false
    t.boolean "active", default: false, null: false
    t.index ["current_workout"], name: "index_users_on_current_workout"
    t.index ["current_workout_group"], name: "index_users_on_current_workout_group"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["gym_id"], name: "index_users_on_gym_id"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "wods", force: :cascade do |t|
    t.integer "workout_id", null: false
    t.integer "gym_id", null: false
    t.date "workout_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["workout_id", "gym_id"], name: "index_wods_on_workout_id_and_gym_id"
  end

  create_table "workout_class_registrations", force: :cascade do |t|
    t.integer "workout_class_id"
    t.text "user_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "complete", default: false, null: false
    t.text "stripe_session_id", null: false
    t.integer "session_id", null: false
  end

  create_table "workout_classes", force: :cascade do |t|
    t.integer "gym_id"
    t.text "title", null: false
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "cost", default: 0.0, null: false
    t.string "avatar_file_name"
    t.string "avatar_content_type"
    t.bigint "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.text "zoom_url"
    t.boolean "active", default: true, null: false
  end

  create_table "workout_details", force: :cascade do |t|
    t.integer "exercise_id"
    t.integer "rep_1_weight"
    t.integer "rep_2_weight"
    t.integer "rep_3_weight"
    t.integer "rep_4_weight"
    t.integer "rep_5_weight"
    t.integer "rep_6_weight"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_previous_workout_id"
    t.text "comment", default: ""
    t.string "band_color"
    t.integer "rep_7_weight"
    t.integer "rep_8_weight"
    t.integer "rep_9_weight"
    t.integer "rep_10_weight"
  end

  create_table "workout_group_pairings", force: :cascade do |t|
    t.integer "workout_id", null: false
    t.integer "workout_group_id", null: false
    t.integer "workout_day", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "gym_id", null: false
  end

  create_table "workout_group_specified_days", force: :cascade do |t|
    t.integer "workout_group_id", null: false
    t.integer "workout_day_num", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "workout_groups", force: :cascade do |t|
    t.integer "workout_id"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "ab_workout"
  end

  create_table "workouts", force: :cascade do |t|
    t.string "name"
    t.integer "frequency"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "category_id"
    t.integer "gym_id"
    t.integer "duration", default: 4
    t.integer "created_by_user_id"
    t.boolean "disabled", default: false
    t.boolean "user_default", default: false
    t.text "details"
    t.string "video_file_name"
    t.string "video_content_type"
    t.bigint "video_file_size"
    t.datetime "video_updated_at"
    t.string "intro_url"
    t.index ["gym_id"], name: "index_workouts_on_gym_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
